import "reflect-metadata";
import { DataSource } from "typeorm"
import "dotenv/config"
import { Users1699793759591 } from "./migration/1699793759591-Users";
import { Employees1699795382624 } from "./migration/1699795382624-Employees";
import { Portfolio1700062266478 } from "./migration/1700062266478-Portfolio";
import { Appointment1700061596841 } from "./migration/1700061596841-Appointment";
import { Desingallery1700162361495 } from "./migration/1700162361495-Desingallery";
import { Users } from "./models/Users";
import { Employees } from "./models/Employees";
import { Portfolio } from "./models/Portfolio";
import { Appointment } from "./models/Appointment";
import { Desingallery } from "./models/Desingallery";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users, Employees, Portfolio, Appointment, Desingallery],
  migrations: [Users1699793759591, Employees1699795382624,
    Portfolio1700062266478, Appointment1700061596841, Desingallery1700162361495],
  synchronize: true,
  logging: false,
})
