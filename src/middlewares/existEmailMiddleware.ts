import { NextFunction, Request, Response } from "express";
import { Users } from "../models/Users";
import { AppDataSource } from "../database";

const userRepository = AppDataSource.getRepository(Users);

const existEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body
  const users = await userRepository.findOneBy({ email })
  
  if (users) {
    return res.status(400).json({ message: 'user already exists' })
  }
  next()
}

export { existEmail }