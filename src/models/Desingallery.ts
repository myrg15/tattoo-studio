import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"


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



}