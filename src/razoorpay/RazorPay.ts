import Razorpay from 'razorpay';
import Orders from './paymentmodel';
import * as Jwt from 'jsonwebtoken';
import User from '../src/user/model';

import crypto from 'crypto';
const { v4: uuidv4 } = require('uuid');

export class PayuPayments {
  static async paymentGateway(req: any, res: any) {
    try {
      const payDetails = {
        txnId: uuidv4(),
        plan_name: req.body.name,
        first_name: req.body.firstName,
        email: req.body.email,
        mobile: req.body.phone,
        service_provide: 'Answergenie',
        amount: req.body.amount,
        call_back_url: `/payment/success`,
        payu_merchant_key: process.env.MERCHANTKEY,
        payu_url: process.env.PAYU_URL,
        payu_fail_url: `/payment/failed`,
        payu_cancel_url: `/payment/cancel`,
        hashString: '',
        payu_sha_token: '',
        udf1: '',
        udf2: '',
        udf3: '',
        udf4: '',
        udf5: '',
      };
      const amount: any = payDetails.amount;
      payDetails.hashString = `${process.env.MERCHANTKEY}|${payDetails.txnId}|${parseInt(amount)}|${
        payDetails.plan_name
      }|${payDetails.first_name}|${payDetails.email}|${process.env.SALT}`;
      payDetails.payu_sha_token = crypto.createHash('sha512').update(payDetails.hashString).digest('hex');

      return res.json({
        success: true,
        code: 200,
        info: payDetails,
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
