import { Request, Response } from 'express';
import deleteVideoController from '../../controllers/video/deleteVideoController';

const deleteVideoHandler = async (req: Request, res: Response) => {

  const userId = req.user;
  const videoId = req.params.videoId;

  try {
    await deleteVideoController(userId, videoId);
    res.status(200).json({ success: true, message: 'Video deleted successfully' });
  } catch (error:any) {
    console.error('Error deleting video:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};
export default deleteVideoHandler;
