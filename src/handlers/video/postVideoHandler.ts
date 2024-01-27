import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import createVideoController from '../../controllers/video/createVideoController';

const postVideoHandler = async (req: Request, res: Response) => {

  const validationRules = [
    body('title').isString().notEmpty(),
    body('description').isString().notEmpty(),
    body('credits').isString().notEmpty(),
    body('isPublic').isBoolean(),
    body('videoUrl').isString().notEmpty(),

  ];

  await Promise.all(validationRules.map(validation => validation.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Some fields are blank.',
      errors: errors.array(),
    });
  }

  const { title, description, credits, isPublic, videoUrl } = req.body;
  
  const userId = req.user;
  
  try {
    const videoData = {
      title,
      description,
      credits,
      isPublic,
      videoUrl,
      userId,
    };
    console.table(videoData);

    const createVideo = await createVideoController(title,description,credits,isPublic,videoUrl,userId);
    
    console.log("created video db handler:",createVideo);
    return res.status(201).json({
      success: true,
      message: 'Video created successfully',
      data: videoData
    });
  } catch (error: any) {
    console.error('Error creating video:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export default postVideoHandler;
