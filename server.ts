import * as dotenv from 'dotenv';
import express from 'express';
import * as mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import { Server, Socket } from 'socket.io';
import UserRouter from './src/src/user/router';
import AIRouter from './src/src/AI/routes';
import RazorRouter from './src/razoorpay/routes';
import { CallPythonAPI } from './src/utils/common';

export class ServerSystem {
  public app: express.Application = express();
  private server!: http.Server;
  private io!: Server;

  constructor() {
    dotenv.config();

    this.setConfigurations();

    this.setRoutes();
    this.error404Handler();
    this.HandleErrors();

    this.createServer();
    this.configureSocketIO();
    this.handleSocketEvents();
  }

  setConfigurations() {
    this.ConnectMongoDB();
    this.Configurations();
  }

  ConnectMongoDB() {
    const url: any = process.env.MONGODB_URL;
    mongoose.connect(url, () => {
      console.log(`database connected to ${url}`);
    });
  }

  Configurations() {
    this.app.use(
      cors({
        origin: '*',
        optionsSuccessStatus: 200,
      })
    );
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  setRoutes() {
    this.app.use('/api/user', UserRouter);
    this.app.use('/api/ai', AIRouter);
    this.app.use('/api/razorpay', RazorRouter);
  }

  error404Handler() {
    this.app.use((req, res) => {
      // console.log('error not found 404');
      res.status(404).json({
        message: 'Not Found',
        Status_code: 404,
      });
    });
  }

  HandleErrors() {
    this.app.use((error: any, req: any, res: any, next: any) => {
      const errorstatus = req.errorStatus || 400;
      console.log(errorstatus);
      res.status(errorstatus).json({
        message: error.message || 'Something Went Wrong. Please try Again!',
        status_code: errorstatus,
      });
    });
  }

  createServer() {
    this.server = http.createServer(this.app);
  }

  configureSocketIO() {
    this.io = new Server(this.server, {
      path: '/api/socket.io',
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
  }

  handleSocketEvents() {
    this.io.on('connection', (socket) => {
      console.log('A user connected');

      // Handle 'message' event
      socket.on('message', (newMessage) => {
        // Broadcast the received message to all connected sockets
        this.io.emit('message', newMessage);

        if (newMessage.sender === 'user') {
          // Perform any necessary operations or logic for the user's message
          // and emit the bot response
          handleBotResponse(newMessage.content);
        }
      });

      // Handle 'callChat' event
      socket.on('callChat', async (userInput) => {
        // Generate the bot response based on the user's input
        const responses = await CallPythonAPI({ text: userInput.content });
        console.log(responses.data.choices[0].message.content, 'dadsd');

        // Emit the bot response to the calling socket
        socket.emit('sendchat', responses.data.choices[0].message.content);
      });

      // Handle socket disconnection event
      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });

    // Function to handle the bot's response
    async function handleBotResponse(response: any) {}
  }

  startServer() {
    this.server.listen(process.env.PORT || 5000, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  }
}
