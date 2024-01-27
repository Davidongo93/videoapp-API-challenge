import { Request, Response } from 'express';
import createCommentController from '../../controllers/video/createCommentController';


const createCommentHandler = async (req: Request, res: Response) => {
  const userId = req.user;
  const videoId = req.params.videoId;
  const { content } = req.body;

  try {
    const comment = await createCommentController(userId, videoId, content);

    console.log(userId,videoId,comment);
    return res.status(201).json({
      success: true,
      message: 'Comment created successfully',
      data: comment,
    });
    
  } catch (error:any) {
    console.error('Error creating comment:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export default createCommentHandler;
