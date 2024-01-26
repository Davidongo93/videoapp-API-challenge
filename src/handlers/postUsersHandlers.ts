import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import newUser from '../controllers/user/newUser';

const postUsersHandler = async (req: Request, res: Response) => {
  // TODO Highly recomended to ser a password policy (Not implemented yet)
  const validationRules = [
    body('username').isString().notEmpty(),
    body('email').isEmail(),
    body('password').isString().notEmpty(),
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

  const { username, email, password } = req.body;

  try {
    const createUser = await newUser(username, email, password);
    const userWithoutPassword = { ...createUser.get(), password: "****" };

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: userWithoutPassword,
    });
  } catch (error: any) {
    console.error('Error creating new user:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export default postUsersHandler;
