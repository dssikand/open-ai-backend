import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const registerSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  email: { type: String },
  phone: { type: String },
  password: { type: String },
  address: { type: String },
  requestBalance: { type: Number, default: 5 },
  role: { type: String, default: '', enum: ['', 'Guest', 'SuperAdmin', 'Admin', 'Employee', 'Manager'] },
  plan: { type: String },
  otp: { type: Number },
  userverified: { type: Boolean, default: false },
  image: {
    type: Object,
  },
});

export default model('user', registerSchema);
