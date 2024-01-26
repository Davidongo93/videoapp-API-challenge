import { DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './user';

class Video extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public credits!: string;
  public isPublic!: boolean;
  public videoUrl!: string; 
  public userId!: string;


  public readonly user?: User;
}

const initVideo = (sequelize: Sequelize) => {
  Video.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      credits: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      videoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Video',
      tableName: 'videos',
    }
  );
};

export { Video as VideoModel, initVideo };
export type { Video };
