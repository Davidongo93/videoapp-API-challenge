import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import db from '../db';

const secretKey = process.env.SECRET_JWT as string;
//TODO set as types in types folder
declare global {
  namespace Express {
      interface Request {
          user? : any
      }
  }
}


const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized access' });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as { userId: string };

    const userId = await db.models.User.findByPk(decoded.userId, {
        attributes: ['id'],
      });
    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized user' });
    }
    //get only the string id.
    req.user = userId.dataValues.id;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default authMiddleware;
