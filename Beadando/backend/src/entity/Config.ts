import {Entity, Column} from "typeorm";

@Entity()
export class Config {

  @Column()
discountLimit: number;
  @Column()
  cookSpace: number;

}
