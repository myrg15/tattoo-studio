import { Request, Response } from "express";
import { Desingallery } from "../models/Desingallery";
import { AppDataSource } from "../database";

const designRepository = AppDataSource.getRepository(Desingallery);

const getAllDesing = async (req: Request, res: Response) => {

    const desings = await designRepository.find()

    res.status(200).json({ desings })

}

export { getAllDesing }