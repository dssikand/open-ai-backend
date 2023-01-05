import Razorpay from 'razorpay';
import Orders from './paymentmodel';
import * as Jwt from 'jsonwebtoken';
import User from '../src/user/model';
var keySecret = process.env.KEY_SECRET;
var keyId = process.env.RAZOR_SECRET;
console.log(keySecret, keyId);

var instance = new Razorpay({ key_id: keyId, key_secret: keySecret });
import crypto from 'crypto';

export class razorpay {
  static async paymentGateway(req: any, res: any) {
    try {
      const options = {
        amount: req.body.amount * 100,
        currency: 'INR',
        receipt: crypto.randomBytes(10).toString('hex'),
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
    var Secret: any = process.env.KEY_SECRET;
    try {
      const authHeader = req.headers.authorization;
      const decodeduser: any = Jwt.decode(authHeader);
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderamount } = req.body;
      // const sign = razorpay_order_id + '|' + razorpay_payment_id;
      // const expectedSign: any = crypto
      //   .createHmac('sha256', process.env.KEY_SECRET || '')
      //   .update(sign.toString())
      //   .digest('hex');
      // console.log(expectedSign, 'SignatureForVerification');
      // if (razorpay_signature === expectedSign) {
      const Order = new Orders({
        userid: decodeduser._id,
        razorpay_order_id,
        razorpay_payment_id,
        orderamount,
      });
      const increatement = orderamount >= 10 ? 5 : orderamount > 50 ? 20 : 30;
      const neworder = await Order.save();
      await User.updateOne(
        { _id: decodeduser._id },
        {
          $inc: { requestBalance: +increatement },
        }
      );
      return res.status(200).json({ neworder, message: 'Request Purchased Successfully' });
      // } else {
      //   return res.status(400).json({ message: 'Invalid signature sent!' });
      // }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error!' });
      console.log(error);
    }
  }
}
