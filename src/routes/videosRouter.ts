import { Router, Request, Response } from 'express';

import authMiddleware from '../middleware/authMiddleware';
import postVideoHandler from '../handlers/video/postVideoHandler';
import editVideoHandler from '../handlers/video/editVideoHandler';
import deleteVideoHandler from '../handlers/video/deleteVideoHandler';


const videosRouter = Router();

videosRouter.get('/', (req: Request, res: Response) => {
    res.send('Get Videos');
  });

  videosRouter.post('/post', authMiddleware, postVideoHandler);
  videosRouter.put('/edit/:videoId', authMiddleware, editVideoHandler);
  videosRouter.delete('/delete/:videoId', authMiddleware, deleteVideoHandler);

export default videosRouter;
