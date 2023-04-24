import { Router } from 'express';
import { AIController } from '../AI/controller';
import { GlobalMiddleWare } from '../../middlewares/GlobalMiddleWares';
import * as cors from 'cors';
class AIRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
  }

  getRoutes() {
    // this.router.use(cors.default());
    this.router.post('/AI', AIController.AI);
  }
}
export default new AIRouter().router;
