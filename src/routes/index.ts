import { Router, Request, Response } from 'express';
import usersRouter from './usersRouter';
const router = Router();
router.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
  });

  router.use('/users', usersRouter);
  


export default router;
