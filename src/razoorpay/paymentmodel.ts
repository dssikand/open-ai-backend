import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    razorpay_order_id: String,
    razorpay_payment_id: String,
    orderamount: Number,
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
);

export default model('orders', orderSchema);
