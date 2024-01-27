import db from "../../db";

const deleteVideoController = async (userId: string, videoId: string): Promise<void> => {
  try {
    const video = await db.models.Video.findOne({
      where: {
        id: videoId,
        userId: userId,
      },
    });

    if (!video) {
      throw new Error('Video not found or unauthorized to delete.');
    }

    await video.destroy();
  } catch (error) {
    throw error;
  }
};

export default deleteVideoController;
