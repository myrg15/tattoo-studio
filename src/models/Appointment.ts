import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from "typeorm";
import { Users } from "./Users";
import { Employees } from "./Employees";
import { Portfolio } from "./Portfolio";

@Entity("appointment")
export class Appointment {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    users!: number

    @Column()
    employees!: number

    @Column()
    portfolio_id!: number

    @Column()
    imag!: string

    @Column()
    date!: Date

    @Column()
    time!: Date

    @Column()
    service!: "enum";

    @Column()
    status!: "enum";

    @Column()
    is_active!: boolean

    @Column()
    created_at!: Date

    @Column()
    updated_at!: Date


    @ManyToOne(() => Users, (user) => user.id)
    @JoinColumn({ name: "users" })
    userAppointment!: Users;

    @ManyToOne(() => Portfolio, (portfolio) => portfolio.id)
    @JoinColumn({ name: "portfolio_id" })
    portfolioAppointment!: Portfolio;

    @ManyToOne(() => Employees, (employees) => employees.id)
    @JoinColumn({ name: "employees" })
    employeesAppointment!: Employees;

}
