import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"
import { Appointment } from "./Appointment"


@Entity("desingallery")
export class Desingallery extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number
  
    @Column()
    name!: string
  
    @Column()
    date!: Date
    
    @Column()
    imag!: string
   
    @Column()
    description!: string
  
    @Column()
    created_at!: Date
    
    @Column()
    updated_at!: Date

    @OneToMany(() => Appointment, (appointment) => appointment.desingallery)
    appointment!: Appointment [];

}
