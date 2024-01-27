import { Request, Response } from 'express';
import getVideosByLikesController from '../../controllers/video/getVideosByLikesController';


 const getVideosByLikesHandler = async (req: Request, res: Response) => {
  try {
    const popularVideos = await getVideosByLikesController();

    return res.status(200).json({
      success: true,
      videos: popularVideos,
    });
  } catch (error:any) {
    console.error('Error fetching popular videos:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
export default getVideosByLikesHandler;
