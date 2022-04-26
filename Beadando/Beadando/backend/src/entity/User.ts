import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique} from "typeorm";

@Entity()
@Unique(["userName"])
export class User {

  @PrimaryColumn()
  userName:string;
  @Column()
  password:string;
  @Column()
  isAdmin:boolean;
}
