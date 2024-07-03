import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({})
export class user{
  @ PrimaryGeneratedColumn()  
  id:number
@Column()
firstname:string

@Column() 
lastname:String

@Column()
password:string
}