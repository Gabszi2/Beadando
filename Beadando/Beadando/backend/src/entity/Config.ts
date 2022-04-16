import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Config {
  @PrimaryGeneratedColumn(
  )
  id:number;
  @Column(
  )
  discountFrom:number;
  @Column()
  cookingStations:number;
}
