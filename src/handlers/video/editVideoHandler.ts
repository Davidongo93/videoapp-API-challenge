import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import editVideoController from '../../controllers/video/editVideoController';


const editVideoHandler = async (req: Request, res: Response) => {

  const userId = req.user;
  const videoId = req.params.videoId;
  console.log(videoId);
  
  const { title, description, credits, isPublic, videoUrl } = req.body;

  const validationRules = [
    body('title').optional().isString().notEmpty(),
    body('description').optional().isString().notEmpty(),
    body('credits').optional().isString().notEmpty(),
    body('isPublic').optional().isBoolean(),
    body('videoUrl').optional().isString().notEmpty(),
  ];

  await Promise.all(validationRules.map(validation => validation.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: errors.array(),
    });
  }

  try {
    const videoToUpdate = await editVideoController(userId, videoId, req.body);

    if (!videoToUpdate) {
      return res.status(404).json({
        success: false,
        message: 'Video not found or unauthorized to edit.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Video updated successfully',
    });
  } catch (error:any) {
    console.error('Error updating video:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export default editVideoHandler;
