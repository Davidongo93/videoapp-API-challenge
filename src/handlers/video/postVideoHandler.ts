import { Request, Response } from "express";

const postVideoHandler = async(req:Request,res:Response)=>{
    console.log(req.user);
    res.status(200).json(req.user)

};

export default postVideoHandler;
