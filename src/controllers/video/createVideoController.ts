import db from '../../db';
const createVideo = async (title:string, description:string, credits:string, isPublic:boolean, videoUrl:string, userId:string) => {
  try {
    return await db.models.Video.create({
        title,
        description,
        credits,
        isPublic,
        videoUrl,
        userId
    });
  } catch (error) {
    
    throw error;
  }
};

export default createVideo;
