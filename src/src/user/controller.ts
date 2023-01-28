import User from './model';
import * as Jwt from 'jsonwebtoken';
import * as Bcrypt from 'bcrypt';
const nodemailer = require('nodemailer');
const json = require('../../utils/keys.json');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
import { makeid } from '../../utils/common';
// import * as multer from "multer";
export default class userController {
  static async register(req: any, res: any, next: any) {
    const { firstName, lastName, email, password, age, address, phone } = req.body;
    console.log(req.body);
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      try {
        const hash = await Bcrypt.hash(password, 10);
        const otp = makeid(6);
        const data = {
          email: email,
          password: hash,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          otp: otp,
        };
        await client.messages.create({
          body: `Answergenie One time password:${otp} `,
          messagingServiceSid: 'MG3a5f5e54596c7951e1c7532dced3c188',
          to: phone,
        });

        const add = await new User(data).save();

        return res.json({
          message: 'OTP Sent to your Phone number',
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
  static async forgotPassword(req: any, res: any) {
    try {
      const userd = await User.findOne({ email: req.body.email });
      if (userd) {
        const frontendurl = process.env.ENV === 'dev' ? process.env.FRONTDEV : process.env.FRONTPROD;
        let secret: any = process.env.JWT_SECRET_KEY;

        const token = Jwt.sign(
          {
            email: userd.email,
            _id: userd._id,
            requestBalance: userd.requestBalance,
          },
          secret
        );
        const finalURL = `${frontendurl}?token=${token}`;

        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            type: 'OAuth2',
            user: 'saymefit@gmail.com', //your permissioned service account member e-mail address
            serviceClient: json.client_id,
            privateKey: json.private_key,
          },
        });

        await transporter.verify();

        const response = await transporter.sendMail({
          from: json.client_email,
          to: userd.email, //you can change this to any other e-mail address and it should work!
          subject: 'Reset Password',
          text: `<strong>Here is your Reset Password Link.</strong><a href={${finalURL}}>Reset Password Link</a>`,
        });

        // const msg = {
        //   to: userd.email,
        //   from: 'gmsmastrolinks@gmail.com', // Use the email address or domain you verified above
        //   subject: 'Reset Password',
        //   text: 'Hi, You have requested for reset password!',
        //   html: `<strong>Here is your Reset Password Link.</strong><a href={${finalURL}}>Reset Password Link</a>`,
        // };
        // const response = await sgMail.send(msg);
        console.log(response);
        res.json({
          Status_code: 200,
          message: 'Mail Sent Successfully',
        });
      } else {
        throw new Error('User is Not Register with us');
      }
    } catch (e) {
      res.json({
        Status_code: 400,
        message: e,
      });
    }
  }
  static async verifyotp(req: any, res: any) {
    try {
      const user = await User.findOne({ otp: req.body.otp });
      if (user) {
        const updateuser = await User.updateOne({ _id: user._id }, { otp: '', userverified: true });
        res.json({
          Status_code: 200,
          message: 'User Verified Successfully',
        });
      } else {
        res.json({
          Status_code: 400,
          message: 'Incorrect OTP',
        });
      }
    } catch (e) {
      return res.json({
        Status_code: 400,
        message: e,
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
          Status_code: 400,
          message: 'email not matched',
        });
      }
    } catch (error) {
      console.log(error, 'Erro');
      return res.json({
        Status_code: 400,
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
        status_code: 400,
      });
    }
  }
  static async updatePassword(req: any, res: any) {
    try {
      const _id = req.params.id;
      const { oldpassword, password } = req.body;
      let user: any = await User.findOne({ _id });

      let result = await Bcrypt.compare(oldpassword, user.password);
      if (!result) {
        res.json({ message: 'Incorrect previous password', status_code: 400 });
      } else {
        const hash = await Bcrypt.hash(password, 10);
        console.log(hash);
        const data = await User.updateOne({ _id: _id }, { password: hash });
        return res.json({
          message: 'Update Password successfully',
          data: data,
          status_code: 200,
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
