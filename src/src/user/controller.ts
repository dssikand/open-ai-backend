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
          Status_code: 400,
          message: 'REGISTRATION FAILED',
        });
      }
    } else {
      return res.json({
        Status_code: 400,
        message: 'User already exist',
      });
    }
  }

  static async login(req: any, res: any) {
    try {
      let secret: any = process.env.JWT_SECRET_KEY;
      console.log(secret, 'megan');
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
          console.log(token, 'vinn');

          return res.json({
            message: 'LOGIN SUCCESS',
            Status_code: 200,
            Token: token,
          });
        }
      } else {
        return res.status(401).json({
          message: 'email not matched',
        });
      }
    } catch (error) {
      console.log(error, 'Erro');
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
        return res.json({
          message: 'Update SUCCESS',
          data: data,
          status_code: 200,
        });
      }
    } catch (error) {
      return res.json({
        message: 'Update FAILED',
        data: error,
        status_code: 400
      });
    }
  }
  static async updatePassword(req: any, res: any) {
    try {
      const _id = req.params.id;
      const { oldpassword,password } = req.body;
      let user: any = await User.findOne({ _id });
    
      let result = await Bcrypt.compare(oldpassword, user.password);
      if (!result) {
        res.json({ message: 'Incorrect previous password',status_code: 400 });
      } else {
        const hash = await Bcrypt.hash(password, 10);
        console.log(hash)
        const data = await User.updateOne({ _id: _id }, { password: hash });
        return res.json({
          message: 'Update Password successfully',
          data: data,
          status_code: 200
        });
      }
    } catch (error) {
      return res.json({
        message: 'Update FAILED',
        data: error,
        status_code: 400,
      });
    }
  }
  static async getCurrentUser(req: any, res: any) {
    try {
      const authHeader = req.headers.authorization;
      const decodeduser: any = Jwt.decode(authHeader);
      let user = await User.findOne({ _id: decodeduser._id });

      res.json({ message: user, Status_code: 200 });
    } catch (error) {
      return res.json({
        message: error,
        Status_code: 400,
      });
    }
  }
}
