import fs from 'fs';
import dotenv from 'dotenv';

describe('.env file', () => {
  it('should have required environment variables', () => {
    const envPath = `${__dirname}/../.env`;
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const parsedEnv = dotenv.parse(envContent);
    const requiredEnvVariables = ['DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_PORT', 'DB_NAME', 'SECRET_JWT'];

    for (const variable of requiredEnvVariables) {
      expect(parsedEnv[variable]).toBeDefined();
      expect(parsedEnv[variable]).not.toBe('');
    }
  });
});
