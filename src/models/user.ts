import { DataTypes, Model, Sequelize } from 'sequelize';
import { Comment } from './comment';
import { Like } from './like';
// TODO implement bcrypt
class User extends Model {
  public id!: string;
  public username!: string;
  public email!: string;
  public password!: string;
  public deletedAt!: Date | null;

  public validPassword(password: string) {
    return this.getDataValue('password') === password;
  }

  public readonly comments?: Comment[];
  public readonly likes?: Like[];
}

const initUser = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
    }
  );
};

export { User as UserModel, initUser };
export type { User };
