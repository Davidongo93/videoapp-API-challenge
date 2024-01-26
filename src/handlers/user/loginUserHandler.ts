import { Request, Response } from "express";
import loginUser from "../../controllers/user/authController";

const loginUserHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await loginUser(email, password);

  if (token) {
    res.status(200).json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

export default loginUserHandler;
