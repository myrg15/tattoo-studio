import { Router } from "express";
import { getAllDesing } from "../controllers/desinGalleryControllers";

const router = Router()

router.get("/all", getAllDesing)


export { router as desinGalleryRouter }