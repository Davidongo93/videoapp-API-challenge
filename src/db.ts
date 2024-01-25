import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

//const DB_DEPLOY: string = process.env.DB_DEPLOY || '';


const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: true,
  native: false,
});

const db = {
    conn: sequelize,
  };
  
  export default db;
