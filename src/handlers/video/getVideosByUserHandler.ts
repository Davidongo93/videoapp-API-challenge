// En getVideosByUserHandler.ts
import { Request, Response } from 'express';
import getVideosByUserController from '../../controllers/video/getVideosByUserController';

const getVideosByUserHandler = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const userVideos = await getVideosByUserController(userId);

    return res.status(200).json({
      success: true,
      videos: userVideos,
    });
  } catch (error:any) {
    console.error('Error fetching user videos:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export default getVideosByUserHandler;
