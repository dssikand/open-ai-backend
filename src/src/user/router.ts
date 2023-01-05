import { Router } from 'express';
import userController from './controller';
import { GlobalMiddleWare } from '../../middlewares/GlobalMiddleWares';
import * as cors from 'cors';
class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.postRoutes();
  }

  postRoutes() {
    this.router.use(cors.default());
    this.router.post('/register', userController.register);
    this.router.post('/login', userController.login);
    this.router.get('/currentuser', userController.getCurrentUser);
  }
}
export default new UserRouter().router;
