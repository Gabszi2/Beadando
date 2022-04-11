import {Column, PrimaryGeneratedColumn} from "typeorm";

export interface Customer{

  id: number;


  firstName: string;


  lastName: string;


  address: string;


  tel: number;
}
