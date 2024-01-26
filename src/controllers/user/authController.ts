import { UserModel } from '../../models/user';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_JWT as string;

const loginUser = async (email: string, password: string): Promise<string | null> => {
  try {
    const user = await UserModel.findOne({ where: { email } });

    if (!user || !user.validPassword(password)) {
      return null;
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.error('Error loging User:', error);
    return null;
  }
};

export default loginUser;
