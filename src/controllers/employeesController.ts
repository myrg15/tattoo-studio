import { Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Employees } from "../models/Employees";
import { Appointment } from "../models/Appointment";
import { Portfolio} from "../models/Portfolio";
import { Users } from "../models/Users";
import { AppDataSource } from "../database";

const userRepository = AppDataSource.getRepository(Users);
const appointmentRepository = AppDataSource.getRepository(Appointment);
const employeesRepository = AppDataSource.getRepository(Employees)


const login = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userRepository.findOneBy({ email } );
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'email incorrect',
      });
    }
    if ( !bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        success: false,
        message: 'password incorrect',
      });
    }
    if (user.role !== 'super_admin') {
      return res.status(400).json({
        success: false,
        message: 'role incorrect',
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '3h',
      }
    );
    return res.json({
      success: true,
      message: 'user successfully authenticated',
      token: token,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "user cannot be created",
    });
  };
}
const getAllAppointment = async (req: Request, res: Response) => {
  try {
    const appointment_id = req.params.id;
    const appointment = await appointmentRepository.find({ //no deberia usar el metodo finOne para recuperar todas las citas
      where: {
        id: parseInt(appointment_id as string)
      }
    });
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "appointment not found",
      });
    }
    return res.json({
      success: true,
      message: "appointment retrieved",
      data: appointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error while retrieving appointment",
    });
  }
};

export { login, getAllAppointment }
