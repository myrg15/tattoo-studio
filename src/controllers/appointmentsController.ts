import { Response, Request } from "express";
import { Appointment } from "../models/Appointment";
import { Users } from "../models/Users";
import { Employees } from "../models/Employees";
import { AppDataSource } from "../database";

const appointmentRepository = AppDataSource.getRepository(Appointment);

const appointments_get_all = async (req: Request, res: Response) => {
  const { token } = req
  if (token.role !== "admin") {
    res.status(401).json({ message: 'No auth' })
  }
  const appointments = await appointmentRepository.find()
  res.status(200).json({
    appointments
  })
}

const appointments_get_employees = async (req: Request, res: Response) => {
  const { token } = req;
  const employees = token.id
  const appointments = await appointmentRepository.find()
  res.status(200).json({ appointments })
}

const appointment_create = async (req: Request, res: Response) => {
  const { users, employees, portfolio_id, imag, date, time, service, status, } = req.body
  const { token } = req
  const new_appointment = new Appointment();
  if (token.role == 'admin') {
    new_appointment.employees = token.id
    new_appointment.users= users
    new_appointment.imag= imag
    new_appointment.date= date
    new_appointment.time = time
    new_appointment.service = service
    new_appointment.status = status
    const appointment = await AppDataSource.manager.save(new_appointment);
    return res.status(200).json({
      appointment
    })
  }
  new_appointment.employees = employees
  new_appointment.users = token.id
  new_appointment.imag= imag
  new_appointment.date= date
  new_appointment.time = time
  new_appointment.service = service
  new_appointment.status = status
  const appointment = await AppDataSource.manager.save(new_appointment);
  return res.status(200).json({
    appointment
  })
}

const appointment_update = async (req: Request, res: Response) => {
  const { id } = req.params
  const appointmentRepository = AppDataSource.getRepository(Appointment);
  const appointment = await appointmentRepository.findOneBy({ id: parseInt(id) });
  
  if (!appointment) {
    return res.status(404).json({
      message: "Not Found Appointment"
    })
  }
  Object.assign(appointment, req.body)
  const updateAppointment = await appointmentRepository.save(appointment)
  res.status(200).json({
    updateAppointment
  })
}

const appointment_delete = async (req: Request, res: Response) => {
  const { id } = req.params
  const appointmentRepository = AppDataSource.getRepository(Appointment);
  const appointment = await appointmentRepository.findOneBy({ id: parseInt(id) });

  if (!appointment) {
    return res.status(404).json({
      message: "Not Found Appointment"
    })
  }
  await appointmentRepository.remove(appointment)
  res.status(200).json({
    message: 'Appointment delete success'
  })
}
export { appointments_get_employees, appointment_create, appointment_update, appointment_delete, appointments_get_all };