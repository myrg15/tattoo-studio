import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Users } from "./Users";
import { Appointment } from "./Appointment";
import { Desingallery } from "./Desingallery";

@Entity("employees")
export class Employees extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  user_id!: number;

  @Column()
  desingallery!: number;

  @Column()
  specialty_services!: string;

  @Column()
  phone_number!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.employees)
  appointment!: Appointment [];

}
