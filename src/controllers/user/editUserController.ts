import db from "../../db";
//TODO create a DTO for newData 
const editUserController = async (userId: string, newData: any) => {
  try {
    const user = await db.models.User.findByPk(userId);

    if (!user) {
      throw new Error('User not found');
    }

    await user.update(newData);

    return user;
  } catch (error) {
    throw error;
  }
};

export default editUserController;
