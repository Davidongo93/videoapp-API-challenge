import { DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './user';
import { Video } from './video';

class Like extends Model {
  public id!: string;
  public userId!: string;
  public videoId!: string;

  public readonly user?: User;
  public readonly video?: Video;
}

const initLike = (sequelize: Sequelize) => {
  Like.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Like',
      tableName: 'likes',
    }
  );
};

export { Like as LikeModel, initLike };
export type { Like };
