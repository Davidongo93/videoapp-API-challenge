import db from '../../db';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_JWT as string;

const loginUser = async (email: string, password: string): Promise<string | null> => {
  try {
    const user = await db.models.User.findOne({ where: { email } });
    
    if (!user || !user.validPassword(password)) {
      return null;
    }

    const token = jwt.sign({ userId: user.dataValues.id }, secretKey, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.error('Error loging User:', error);
    return null;
  }
};

export default loginUser;
