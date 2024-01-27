import { Router, Request, Response } from 'express';

import authMiddleware from '../middleware/authMiddleware';
import postVideoHandler from '../handlers/video/postVideoHandler';


const videosRouter = Router();

videosRouter.get('/', (req: Request, res: Response) => {
    res.send('Get Videos');
  });

  videosRouter.post('/post', authMiddleware, postVideoHandler);
  
/*   videosRouter.put('/edit', authMiddleware);
  videosRouter.delete('/delete', authMiddleware); */

export default videosRouter;
