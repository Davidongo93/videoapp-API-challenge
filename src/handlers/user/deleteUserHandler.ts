import { Request, Response } from 'express';
import deleteUserController from '../../controllers/user/deleteUserController';

const deleteUserHandler = async (req:Request, res:Response) => {
    try {
      const userId = req.user;
      
      await deleteUserController(userId);
      res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  export default deleteUserHandler;
