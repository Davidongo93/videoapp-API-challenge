import { Express } from 'express';
import bodyParser from 'body-parser';

const configureBodyParsers = (server: Express) => {
  server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  server.use(bodyParser.json({ limit: '50mb' }));
};

export default configureBodyParsers;
