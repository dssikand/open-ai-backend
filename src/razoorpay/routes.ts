import { Router } from 'express';
import { PayuPayments } from './RazorPay';

class RazorRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.postRoutes();
  }

  postRoutes() {
    this.router.post('/initatepayment', PayuPayments.paymentGateway);
    this.router.post('/verify', PayuPayments.verify);
    this.router.get('/getPrices', PayuPayments.getPrices);
  }
}
export default new RazorRouter().router;
