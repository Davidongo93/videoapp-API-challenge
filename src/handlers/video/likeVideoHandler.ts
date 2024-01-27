// En likeVideoHandler.ts
import { Request, Response } from 'express';
import likeVideoController from '../../controllers/video/likeVideoController';

 const likeVideoHandler = async (req: Request, res: Response) => {
  const userId = req.user;
  const videoId = req.params.videoId;

  try {
    await likeVideoController(userId, videoId);
    return res.status(200).json({ success: true, message: 'Video liked/unliked successfully' });
  } catch (error:any) {
    console.error('Error liking/unliking video:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
export default likeVideoHandler;
