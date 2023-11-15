import { Router } from "express";
import { register, login, profile, update, viewappointments } from "../controllers/usersController";
import { auth } from "../middlewares/auth";
import { existEmail } from "../middlewares/existEmailMiddleware";


const router = Router()

router.post('/register',existEmail, register)
router.post('/login', login)
router.get('/profile', auth, profile)
router.post('/update', auth, update)
router.get('/viewappointments', auth, viewappointments)

export { router }