import Razorpay from 'razorpay';
var instance = new Razorpay({ key_id: process.env.RAZOR_SECRET, key_secret: process.env.KEY_SECRET });
import crypto from 'crypto';

export class razorpay {
  static async paymentGateway(req: any, res: any) {
    try {
      const options = {
        amount: req.body.amount * 100,
        currency: 'INR',
        receipt: crypto.randomBytes(10).toString('hex'),
        notes: 'JSON',
        partial_payment: true,
      };

      instance.orders.create(options, (error: any, order: any) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Something Went Wrong!' });
        }
        res.status(200).json({ data: order });
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error!' });
      console.log(error);
    }
  }

  static async verify(req: any, res: any) {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      const sign = razorpay_order_id + '|' + razorpay_payment_id;
      const expectedSign: any = crypto
        .createHmac('sha256', process.env.KEY_SECRET)
        .update(sign.toString())
        .digest('hex');

      if (razorpay_signature === expectedSign) {
        return res.status(200).json({ message: 'Payment verified successfully' });
      } else {
        return res.status(400).json({ message: 'Invalid signature sent!' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error!' });
      console.log(error);
    }
  }
}
