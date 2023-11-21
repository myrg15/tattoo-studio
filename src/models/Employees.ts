import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Users } from "./Users";
import { Appointment } from "./Appointment";

@Entity("employees")
export class Employees extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  user_id!: number;

  @Column()
  specialty_services!: string;

  @Column()
  phone_number!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user!: Users;

  @OneToMany(() => Appointment, (appointment) => appointment.id)
  appointments!: Appointment[];
}
