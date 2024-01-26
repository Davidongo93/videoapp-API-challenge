import { Router, Request, Response } from 'express';
import postUsersHandler from '../handlers/postUsersHandlers';

const usersRouter = Router();

usersRouter.get('/', (req: Request, res: Response) => {
    res.send('Users Route');
  });

  usersRouter.post('/', postUsersHandler);
  
export default usersRouter;
