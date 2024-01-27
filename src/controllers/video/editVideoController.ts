import db from "../../db";

const editVideoController = async (userId: string, videoId: string, data: any) => {
  try {
    const videoToUpdate = await db.models.Video.findOne({
      where: {
        id: videoId,
        userId: userId,
      },
    });

    if (!videoToUpdate) {
      throw new Error('Video not found or unauthorized to edit.');
    }

    await videoToUpdate.update(data);

    return videoToUpdate;
  } catch (error) {
    throw error;
  }
};

export default editVideoController;
