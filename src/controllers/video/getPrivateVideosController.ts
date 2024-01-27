import db from '../../db';

const getPrivateVideosController = async (): Promise<any[]> => {
  try {
    const PrivateVideos = await db.models.Video.findAll({
      where: {
        isPublic: false,
      },
    });

    return PrivateVideos;
  } catch (error) {
    throw error;
  }
};

export default getPrivateVideosController;
