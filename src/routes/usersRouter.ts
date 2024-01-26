import { Router, Request, Response } from 'express';
import postUsersHandler from '../handlers/postUsersHandlers';
import loginUserHandler from '../handlers/loginUserHandler';
import authMiddleware from '../middleware/authMiddleware';
import editUserHandler from '../handlers/editUserHandler';

const usersRouter = Router();

usersRouter.get('/', (req: Request, res: Response) => {
    res.send('Users Route');
  });

  usersRouter.post('/', postUsersHandler);
  usersRouter.post('/login', loginUserHandler);
  usersRouter.put('/edit', authMiddleware,editUserHandler)
  
export default usersRouter;
