import { Router } from 'express';
import {AIController} from '../AI/controller';
import { GlobalMiddleWare } from '../../middlewares/GlobalMiddleWares';
class AIRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
  }

  getRoutes() {
   
    this.router.get('/AI', AIController.AI);

  }
}
export default new AIRouter().router;
