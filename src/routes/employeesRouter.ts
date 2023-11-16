import { Response, Request } from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../middlewares/auth";
import { login, getAllAppointment, getAllEmployees } from "../controllers/employeesController";

const router = Router()


router.post('/login', login)
router.get('/all', getAllEmployees )
router.get('/getAllAppointments', auth, getAllAppointment)
export { router }