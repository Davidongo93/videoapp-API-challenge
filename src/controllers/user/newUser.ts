import { UserModel } from '../../models/user';
import { UniqueConstraintError } from 'sequelize';

const createUser = async (username: string, email: string, password: string) => {
  try {
    return await UserModel.create({
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
