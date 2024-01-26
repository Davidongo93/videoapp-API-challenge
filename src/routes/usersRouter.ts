import { Router, Request, Response } from 'express';
import postUsersHandler from '../handlers/postUsersHandlers';
import loginUserHandler from '../handlers/loginUserHandler';

const usersRouter = Router();

usersRouter.get('/', (req: Request, res: Response) => {
    res.send('Users Route');
  });

  usersRouter.post('/', postUsersHandler);
  usersRouter.post('/login', loginUserHandler);
  
export default usersRouter;
