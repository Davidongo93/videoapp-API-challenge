import { Router, Request, Response } from 'express';

import authMiddleware from '../middleware/authMiddleware';

import postUsersHandler from '../handlers/user/postUsersHandlers';
import loginUserHandler from '../handlers/user/loginUserHandler';
import editUserHandler from '../handlers/user/editUserHandler';
import deleteUserHandler from '../handlers/user/deleteUserHandler';

const usersRouter = Router();

usersRouter.get('/', (req: Request, res: Response) => {
    res.send('Users Route');
  });

  usersRouter.post('/', postUsersHandler);
  usersRouter.post('/login', loginUserHandler);
  usersRouter.put('/edit', authMiddleware,editUserHandler);
  usersRouter.delete('/delete', authMiddleware,deleteUserHandler );
  
export default usersRouter;
