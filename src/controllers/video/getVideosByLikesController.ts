import {  literal } from 'sequelize';
import db from '../../db';

const getVideosByLikesController = async (): Promise<any[]> => {
  try {
    const popularVideos = await db.models.Video.findAll({
      attributes: [
        'id',
        'title',
        'description',
        'credits',
        'isPublic',
        'videoUrl',
        'createdAt',
        'updatedAt',
        [literal('(SELECT COUNT(*) FROM "likes" WHERE "likes"."VideoId" = "Video"."id")'), 'likeCount'],
      ],
      order: [[literal('(SELECT COUNT(*) FROM "likes" WHERE "likes"."VideoId" = "Video"."id")'), 'DESC']],
    });

    return popularVideos;
  } catch (error) {
    throw error;
  }
};

export default getVideosByLikesController;
