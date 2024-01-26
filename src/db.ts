import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initUser, UserModel } from './models/user';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
  native: false,
});

const initModels = () => {
  initUser(sequelize);
};
initModels();

const db = {
  conn: sequelize,
  models: {
    User: UserModel,
  },
};

export default db;
