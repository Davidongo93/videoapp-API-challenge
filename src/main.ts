import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import db from './db';

const host: string = process.env.HOST ?? 'localhost';
const port: number = process.env.PORT ? Number(process.env.PORT) : 3000;

db.conn
  .sync({ alter: true })
  .then(() => {
    console.log('Database synchronized successfully');
    // Realiza otras operaciones si es necesario
    return db.conn.authenticate(); // Verificar la autenticación
  })
  .then(() => {
    console.log('Database authenticated successfully');
    app.listen(port, host, () => {
      console.log(`[ ready ] http://${host}:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing or authenticating the database:', error);
  });
