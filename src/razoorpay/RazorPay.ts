import Razorpay from 'razorpay';
import Orders from './paymentmodel';
import * as Jwt from 'jsonwebtoken';
import User from '../src/user/model';
import crypto from 'crypto';
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(process.env.STRIPE_SECRTE);

export class PayuPayments {
  static async paymentGateway(req: any, res: any) {
    try {
      console.log(req.body);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(req.body.amount * 100),
        currency: 'usd',
        payment_method_types: ['card'],
        description: req.body.name,
        shipping: {
          name: req.body.customername,
          address: {
            line1: '510 Townsend St',
            postal_code: '98140',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
          },
        },
      });
      return res.json({
        success: true,
        code: 200,
        info: paymentIntent,
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
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderamount, pid } = req.body;
      const paymentIntent = await stripe.paymentIntents.retrieve(pid);
      console.log(paymentIntent, 'paymentIntent');
      // const sign = razorpay_order_id + '|' + razorpay_payment_id;
      // const expectedSign: any = crypto
      //   .createHmac('sha256', process.env.KEY_SECRET || '')
      //   .update(sign.toString())
      //   .digest('hex');
      // console.log(expectedSign, 'SignatureForVerification');
      // if (razorpay_signature === expectedSign) {
      const Order = new Orders({
        userid: decodeduser._id,
        orderDetails: paymentIntent,
        planname: paymentIntent.description,
      });
      let amount = paymentIntent.amount / 100;
      const increatement =
        amount == 19.9 ? 70 : amount == 39.9 ? 130 : amount == 89.9 ? 350 : amount == 139.9 ? 2000 : '';
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
