import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderDetails: { type: Object },
    orderamount: Number,
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    planname: String,
  },
  { timestamps: true }
);

export default model('orders', orderSchema);
