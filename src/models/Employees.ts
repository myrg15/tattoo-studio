import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./Users";

@Entity("employees")
export class Employees {
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

  @ManyToOne(() => Users, (user) => user.employess)
  @JoinColumn({ name: "user_id" })
  user!: Users;
}
