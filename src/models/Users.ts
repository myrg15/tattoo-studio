import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn, CreateDateColumn } from "typeorm"
//import { Employees } from "./Employees"
import { Appointment } from "./Appointment"

@Entity("users")
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
  
    @Column()
    username!: string
  
    @Column()
    email!: string
  
    @Column()
    password!: string
  
    @Column({
    default: 'active'
    })
    status!: string
    
    @Column({ 
    enum: ['admin', 'user', 'super_admin'], 
    default: 'user' 
    })
    role!: string

    @Column({
    nullable : true
    })
    phone_number!: string;
    
    @CreateDateColumn()
    create_at!: Date;
    
    @CreateDateColumn()
    updated_at!: Date

    @OneToMany ( () => Appointment, appointment => appointment.users)
    appointment! : Appointment [];

}