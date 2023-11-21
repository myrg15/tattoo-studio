import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from "typeorm";
import { Users} from "./Users";
import { Employees} from "./Employees";
import { Desingallery} from "./Desingallery";

@Entity("appointment")
export class Appointment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number
  
    @Column()
    users!: number
  
    @Column()
    employees!: number
    
    @Column()
    desingallery!: number
    
    @Column()
    date!: Date
    
    @Column()
    time!: string
     
    @ManyToOne(() => Users, (user) => user.id)
    @JoinColumn({ name: "users_id" })
    userAppointment!: Users;
  
    @ManyToOne(() => Employees, (employees) => employees.id)
    @JoinColumn({ name: "employees_id" })
    employeesAppointment!: Employees; 
  
    @ManyToOne(() => Desingallery, (desingallery) => desingallery.id)
    @JoinColumn({ name: "desingallery_id" })
    desingalleryAppointment!: Desingallery;
    
}
