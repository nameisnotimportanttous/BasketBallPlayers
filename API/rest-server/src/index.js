import http from 'http';
import App from './config/express';

const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, err => {
  if (err) console.error(err);
  console.log('successfully connected to port', PORT);
});
