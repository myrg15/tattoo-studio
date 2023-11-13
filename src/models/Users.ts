import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn, CreateDateColumn } from "typeorm"
import { Employees } from "./Employees"

@Entity("users")
export class Users {
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
    
    @CreateDateColumn()
    create_at!: Date;
    
    @CreateDateColumn()
    updated_at!: Date

    @OneToMany ( () => Employees, (employees) => employees.user_id)
    employess! : Employees [];
}