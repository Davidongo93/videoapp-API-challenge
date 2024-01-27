import { Request, Response } from 'express';
import getPrivateVideosController from '../../controllers/video/getPrivateVideosController';

const getPrivateVideosHandler = async (req: Request, res: Response) => {
  try {
    const PrivateVideos = await getPrivateVideosController();

    return res.status(200).json({
      success: true,
      videos: PrivateVideos,
    });
  } catch (error:any) {
    console.error('Error fetching Private videos:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
export default getPrivateVideosHandler;
