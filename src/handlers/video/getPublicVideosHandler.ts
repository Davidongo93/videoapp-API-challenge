import { Request, Response } from 'express';
import getPublicVideosController from '../../controllers/video/getPublicVideosController';

const getPublicVideosHandler = async (req: Request, res: Response) => {
  try {
    const publicVideos = await getPublicVideosController();

    return res.status(200).json({
      success: true,
      videos: publicVideos,
    });
  } catch (error:any) {
    console.error('Error fetching public videos:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
export default getPublicVideosHandler;
