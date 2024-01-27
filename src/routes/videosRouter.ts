import { Router, Request, Response } from 'express';

import authMiddleware from '../middleware/authMiddleware';
import postVideoHandler from '../handlers/video/postVideoHandler';
import editVideoHandler from '../handlers/video/editVideoHandler';
import deleteVideoHandler from '../handlers/video/deleteVideoHandler';
import getVideosByUserHandler from '../handlers/video/getVideosByUserHandler';
import getPublicVideosHandler from '../handlers/video/getPublicVideosHandler';
import getPrivateVideosHandler from '../handlers/video/getPrivateVideosHandler';

const videosRouter = Router();

videosRouter.get('/', (req: Request, res: Response) => {
    res.send('Video Route');
  });

  videosRouter.post('/post', authMiddleware, postVideoHandler);
  videosRouter.put('/edit/:videoId', authMiddleware, editVideoHandler);
  videosRouter.delete('/delete/:videoId', authMiddleware, deleteVideoHandler);
  //Only registered Users.
  videosRouter.get('/user/:userId', authMiddleware, getVideosByUserHandler);
  //GET videos
  videosRouter.get('/public', getPublicVideosHandler);
  videosRouter.get('/private', authMiddleware, getPrivateVideosHandler);
 

export default videosRouter;
