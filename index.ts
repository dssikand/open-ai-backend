import { ServerSystem } from './server';

let server = new ServerSystem();
let port = process.env.PORT || 5000;

server.startServer();
