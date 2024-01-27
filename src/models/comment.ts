import { DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './user';
import { Video } from './video';

class Comment extends Model {
  public id!: string;
  public content!: string;
 
  public readonly user?: User;
  public readonly video?: Video;
}

const initComment = (sequelize: Sequelize) => {
  Comment.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments',
    }
  );
};

export { Comment as CommentModel, initComment };
export type { Comment };
