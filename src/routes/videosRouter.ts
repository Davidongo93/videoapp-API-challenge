import { Router, Request, Response } from 'express';

import authMiddleware from '../middleware/authMiddleware';
import postVideoHandler from '../handlers/video/postVideoHandler';
import editVideoHandler from '../handlers/video/editVideoHandler';
import deleteVideoHandler from '../handlers/video/deleteVideoHandler';
import getVideosByUserHandler from '../handlers/video/getVideosByUserHandler';


const videosRouter = Router();

videosRouter.get('/', (req: Request, res: Response) => {
    res.send('Get Videos');
  });

  videosRouter.post('/post', authMiddleware, postVideoHandler);
  videosRouter.put('/edit/:videoId', authMiddleware, editVideoHandler);
  videosRouter.delete('/delete/:videoId', authMiddleware, deleteVideoHandler);
  //Only registered Users.
  videosRouter.get('/user/:userId', authMiddleware, getVideosByUserHandler);

export default videosRouter;
