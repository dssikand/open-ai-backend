import { Router } from 'express';
import {razorpay} from "./RazorPay"

class RazorRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.postRoutes();
  }

  postRoutes() {
    this.router.post('/payment',razorpay.paymentGateway);
    this.router.post('/verify', razorpay.verify);
  }
}
export default new RazorRouter().router;
