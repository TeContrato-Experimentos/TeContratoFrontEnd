import {User} from "./user";
export interface Contractor extends User{
  id:number
  firstname:string
  lastname: string
  email: string
  number: number
  password: string


  TBio:string,
  NEducation:string,
  Numphone:number
}
