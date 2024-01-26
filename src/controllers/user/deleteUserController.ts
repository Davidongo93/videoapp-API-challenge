import db from '../../db';

const deleteUserController = async (userId: string): Promise<void> => {
  try {
    const user = await db.models.User.findByPk(userId);

        if (!user) {
      throw new Error('User not found');
    }

    await user.update({ deletedAt: new Date() });
    
  } catch (error) {
    throw error;
  }
};

export default deleteUserController;
