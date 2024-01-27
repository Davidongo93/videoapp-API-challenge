import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

import { initUser, UserModel } from './models/user';
import { initVideo, VideoModel } from './models/video';
import { initComment, CommentModel } from './models/comment';
import { initLike, LikeModel } from './models/like';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: console.log,
  native: false,
});

const initModels = () => {
  initUser(sequelize);
  initVideo(sequelize);
  initComment(sequelize);
  initLike(sequelize);

  const models: any = sequelize.models;

  
// Modelo User
models.User.hasMany(models.Video, { foreignKey: 'userId', as: 'videos' });
models.Video.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

models.User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
models.Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

models.Video.hasMany(models.Comment, { foreignKey: 'videoId', as: 'comments' });
models.Comment.belongsTo(models.Video, { foreignKey: 'videoId', as: 'video' });

models.User.hasMany(models.Like);
models.Like.belongsTo(models.User);

models.Video.hasMany(models.Like);
models.Like.belongsTo(models.Video);

};

initModels();

const db = {
  conn: sequelize,
  models: {
    User: UserModel,
    Video: VideoModel,
    Comment: CommentModel,
    Like: LikeModel
  },
};

export default db;
