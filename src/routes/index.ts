import { Router, Request, Response } from 'express';

import usersRouter from './usersRouter';
import videosRouter from './videosRouter';

const router = Router();
//TODO get all users (admin)
router.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
  });

  router.use('/users', usersRouter);
  router.use('/video',videosRouter)
  


export default router;
