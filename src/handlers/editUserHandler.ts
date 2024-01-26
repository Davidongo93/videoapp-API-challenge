import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import editUserController from '../controllers/user/editUserController';

const editUserHandler = async (req: Request, res: Response) => {
  const validationRules = [
    body('username').optional().isString().notEmpty(),
    body('email').optional().isEmail(),
    body('password').optional().isString().notEmpty(),
  ];

  await Promise.all(validationRules.map(validation => validation.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: errors.array(),
    });
  }

  try {
    const userId = req.user.dataValues.id;

    await editUserController(userId, req.body);

    return res.status(200).json({ success: true, message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export default editUserHandler;
