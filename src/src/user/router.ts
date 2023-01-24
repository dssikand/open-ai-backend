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
    this.router.post('/forgotpassword', userController.forgotPassword);
    this.router.patch('/updateuser/:id', userController.updateUser);
    this.router.patch('/updatepassword/:id', userController.updatePassword);
    this.router.get('/currentuser', userController.getCurrentUser);
    this.router.patch('/verifyotp', userController.verifyotp);
  }
}
export default new UserRouter().router;
