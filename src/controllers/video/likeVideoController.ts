import db from '../../db';

const likeVideoController = async (userId: string, videoId: string): Promise<void> => {
  try {
    const existingLike = await db.models.Like.findOne({
      where: {
        UserId: userId,
        VideoId: videoId,
      },
    });

    if (!existingLike) {
      await db.models.Like.create({
        UserId: userId,
        VideoId: videoId,
      });
    } else {
      await existingLike.destroy();
    }
  } catch (error) {
    throw error;
  }
};

export default likeVideoController;
