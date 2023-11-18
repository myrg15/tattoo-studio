import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from "typeorm";
import { Users } from "./Users";

@Entity("appointment")
export class Appointment {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    users!: number

    @Column()
    date!: Date

    @Column()
    time!: Date

    
    @ManyToOne(() => Users, (user) => user.id)
    @JoinColumn({ name: "users" })
    userAppointment!: Users;

}
