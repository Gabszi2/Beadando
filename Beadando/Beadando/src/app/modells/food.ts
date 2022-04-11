import {Column, PrimaryGeneratedColumn} from "typeorm";

export interface Food{

  id: number;

  name:string;

  size:string;
  description:string;

  cookTime:number;

  price:number;
}
