import db from '../../db';

const getPublicVideosController = async (): Promise<any[]> => {
  try {
    const publicVideos = await db.models.Video.findAll({
      where: {
        isPublic: true,
      },
    });

    return publicVideos;
  } catch (error) {
    throw error;
  }
};

export default getPublicVideosController;
