import db from '../../db';

const createCommentController = async (userId: string, videoId: string, content: string): Promise<any> => {
  try {
    const comment = await db.models.Comment.create({
      userId,
      videoId,
      content,
    });
    console.log("controller data:",userId,videoId,content);
    

    return comment;
  } catch (error) {
    throw error;
  }
};

export default createCommentController;
