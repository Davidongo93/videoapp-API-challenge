import supertest from 'supertest';
import { describe } from 'node:test';
import app from '../src/app';
import db from '../src/db';

describe('Database Connection', () => {
  jest.setTimeout(15000);

  beforeAll(async () => {
    await db.conn.sync({ alter: true });
  });

  afterAll(async () => {
    await db.conn.close();
  });

  it('should authenticate the database successfully', async () => {
    jest.setTimeout(15000);
    const authenticationResult = await db.conn.authenticate();
    await expect(db.conn.authenticate()).resolves.toBeUndefined();
  });
});

describe('API Endpoint', () => {
  jest.setTimeout(15000);

  it('should start the server and respond to requests', async () => {
    jest.setTimeout(15000);
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
  });
});
