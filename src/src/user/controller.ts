import User from './model';
import * as Jwt from 'jsonwebtoken';
import * as Bcrypt from 'bcrypt';
// import * as multer from "multer";
export default class userController {
  static async register(req: any, res: any, next: any) {
    const { firstName, lastName, email, password, age, address, phone } = req.body;
    console.log(req.body);
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      try {
        const hash = await Bcrypt.hash(password, 10);
        const data = {
          email: email,
          password: hash,
          firstName: firstName,
          lastName: lastName,
        };

        const add = await new User(data).save();
        return res.json({
          message: 'REGISTRATION SUCCESSFULL',
          Status_code: 200,
          data: data,
        });
      } catch (error) {
        console.log(error);
        return res.json({
          message: 'REGISTRATION FAILED',
        });
      }
    } else {
      res.send({ message: 'User Already exists with same email you entered' });
    }
  }

  static async login(req: any, res: any) {
    try {
      let secret: any = process.env.JWT_SECRET_KEY;
      console.log(secret,"megan");
      let user: any = await User.findOne({ email: req.body.email });

      if (user) {
        let result = await Bcrypt.compare(req.body.password, user.password);
        if (!result) {
          console.log('password not matching');
          return res.status(401).json({
            msg: 'password matching fail',
          });
        } else {
          const token = Jwt.sign(
            {
              email: user.email,
              _id: user._id,
              requestBalance: user.requestBalance,
            },
            secret
          );
          console.log(token,"vinn");

          return res.json({
            message: 'LOGIN SUCCESS',
            Token: token,
          });
        }
      } else {
        return res.status(401).json({
          msg: 'email not matched',
        });
      }
    } catch (error) {
      return res.json({
        message: 'LOGIN FAILED',
      });
    }
  }
  static async updateUser(req: any, res: any) {
    try {
      const _id = req.params.id;
      const { firstName, lastName, email, age, address, phone } = req.body;
      let user = await User.findOne({ _id });

      if (!user) {
        res.json({ message: 'user not found' });
      } else {
        const data = await User.updateOne({ _id: _id }, { ...req.body });
        console.log(data, 'vinay bawa');
        return res.json({
          message: 'Update SUCCESS',
          data: data,
        });
      }
    } catch (error) {
      return res.json({
        message: 'Update FAILED',
        data: error,
      });
    }
  }
}
