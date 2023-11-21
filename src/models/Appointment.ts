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
     
    @ManyToOne(() => Users, (user) => user.appointment)
    @JoinColumn({ name: "user_id" })
    user!: Users;
  
    @ManyToOne(() => Employees, (employees) => employees.appointment)
    @JoinColumn({ name: "employees_id" })
    employeesAppointment!: Employees; 
  
    @ManyToOne(() => Desingallery, (desingallery) => desingallery.appointment)
    @JoinColumn({ name: "desingallery_id" })
    desingalleryAppointmente!: Desingallery;
    
}
