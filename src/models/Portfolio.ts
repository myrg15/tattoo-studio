import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn} from "typeorm";
import { Employees } from "./Employees";

@Entity("portfolio")

export class Portfolio {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    employees_id!: number
  
    @Column()
    imag!: string
  
    @Column()
    description!: string
  
    @Column()
    is_active!: boolean

    @Column()
    created_at!: Date
    
    @Column()
    updated_at!: Date

    @OneToMany(() => Employees, (employees) => employees.id)
    employees!: Employees[];

}
