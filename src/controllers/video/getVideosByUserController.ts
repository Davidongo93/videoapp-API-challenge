import db from '../../db';

const getVideosByUserController = async (userId: string): Promise<any[]> => {
  try {
    const userVideos = await db.models.Video.findAll({
      where: {
        userId: userId,
      },
    });

    return userVideos;
  } catch (error) {
    throw error;
  }
};

export default getVideosByUserController;
