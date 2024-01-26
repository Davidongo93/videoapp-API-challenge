import db from '../../db';
import { UniqueConstraintError } from 'sequelize';

const createUser = async (username: string, email: string, password: string) => {
  try {
    return await db.models.User.create({
      username,
      email,
      password,
    });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      throw new Error('Email already registered.');
    }
    throw error;
  }
};

export default createUser;
