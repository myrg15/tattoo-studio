import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { Users } from "../models/Users";
import { Employees } from "../models/Employees";
import { Portfolio } from "../models/Portfolio";
import { Appointment } from "../models/Appointment";
import bcrypt from "bcrypt";
import { AppDataSource } from "../database";

const userRepository = AppDataSource.getRepository(Users);
const appointmentRepository = AppDataSource.getRepository(Appointment);
const employeesRepository = AppDataSource.getRepository(Employees)


const getAllUser = async(req: Request, res:Response) => {
    const users = await userRepository.find()

    res.status(200).json({ users  })
}

const register = async (req: Request, res: Response) => {
  const { username, email, password, role, specialtyServices, phone } = req.body
  try {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.json({ mensaje: 'email invalid' });
    }
    const new_users = new Users();
    new_users.username = username;
    new_users.email = email;
    new_users.password = bcrypt.hashSync(password, 10);
    new_users.role = role
    new_users.phone_number = phone
    const user = await userRepository.save(new_users)

    if(!role || role == 'user'){
      return res.status(200).json({ message: 'User create success' })
    }

    const new_employee = new Employees()
    new_employee.user_id = user.id
    new_employee.specialty_services = specialtyServices
    new_employee.phone_number = phone

    await employeesRepository.save(new_employee)

    return res.json({
      success: true,
      message: 'user created succesfully',
      users: new_users
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "user cannot be created",
    });
  }
}
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try{
  const users = await userRepository.findOne({
    where: {email}, 
    });

  if (!users) {
    return res.status(400).json({
      success: false,
      message: 'user or password incorrect',
    });
  }
  if (!bcrypt.compareSync(password, users.password)) {
    return res.status(400).json({
      success: true,
      message: 'user or password incorrect',
    })
  }
  const token = jwt.sign({
    users: users.id,
    role: users.role,
    email: users.email
  },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '7d',
    });
  return res.json({
    success: true,
    message: "user logged succesfully",
    token: token,
    username : users.username,
    role : users.role
  });
}catch (error){
  return res.status(500).json({
    success: false,
    message: 'user authentication error',
  });
}
};

const profile = async (req: Request, res: Response) => {
  const { email } = req.token
  try {
    const users = await userRepository.findOneBy(
      {
        email
      },
    );
    return res.json(
      {
        success: true,
        message: 'profile users retrieved',
        date: users
      });
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: 'users not get profile',
      }
    );
  }
}

const update = async (req: Request, res: Response) => {
  const { email } = req.token
  try {
    const users = await userRepository.findOneBy({ email })
    if (users) {
      Object.assign(users, req.body)
      const updateProfile = await userRepository.save(users);
      return res.json({
        success: true,
        message: 'customer profile update successfully',
        data: updateProfile,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'user profile update failed'
    });
  }
}

const viewappointments = async (req: Request, res: Response) => {
  try {
    const myappointments = await appointmentRepository.findOne  ({
      where: {
        users : req.token.users
      }
    })
    return res.json(
      {
        success: true,
        message: "profile user retrieved",
        data: myappointments
      });
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: "user can't get profile",
        error: error
      }
    )
  }
}

const getEmployees = async (req: Request, res: Response) => {
  try {
    const viewEmployees = await employeesRepository.find({
      where: {
        user_id : req.body.id
      }
    })
    return res.json(
      {
        success: true,
        message: "profile user retrieved",
        data: viewEmployees
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error searching tattoo artist",
    });
  }
}
export { register, login, profile, update, viewappointments, getEmployees, getAllUser }
