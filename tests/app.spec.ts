import supertest from 'supertest';
import app from '../src/app';
import db from '../src/db';

describe('Database Connection', () => {
  beforeAll(async () => {
    await db.conn.sync({ alter: true });
  });

  afterAll(async () => {
    await db.conn.close();
  });

  it('should authenticate the database successfully', async () => {
    const authenticationResult = await db.conn.authenticate();
    await expect(db.conn.authenticate()).resolves.toBeUndefined();
  });
});

describe('API Endpoint', () => {
  it('should start the server and respond to requests', async () => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
  });
});
