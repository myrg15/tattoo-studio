import { Response, Request } from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../middlewares/auth";
import { appointment_create, appointment_delete, appointment_update, appointments_get_all, appointments_get_employees, get_appointment_by_id } from "../controllers/appointmentsController";

const router = Router()
router.get('/appointments_get_all',auth, appointments_get_all)
router.get('/appointments_get_tattoo', auth, appointments_get_employees)
router.get('/appointments_get_by_id', auth, get_appointment_by_id)
router.post('/appointment_create',auth, appointment_create)
router.put('/appointment_update/:id', auth, appointment_update)
router.delete('/appointment_delete/:id', auth, appointment_delete)

export { router as appointmentsRouter }






