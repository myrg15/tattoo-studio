import { Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Employees } from "../models/Employees";
import { Appointment } from "../models/Appointment";
import { Portfolio} from "../models/Portfolio";
import { Users } from "../models/Users";
