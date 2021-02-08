import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { Doggo } from "./Doggo";
import { Morsel } from "./Morsel";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdDate = Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedDate = Date();

  @Field(() => String)
  @Column({ unique: true })
  username!: string;

  @Field(() => String)
  @Column({ unique: true })
  email!: string;

  @Column({ type: "text" })
  password!: string;

  @Field(() => [Doggo])
  @OneToMany(() => Doggo, (doggo) => doggo.owner)
  doggos: Doggo[];

  @OneToMany(() => Morsel, (morsel) => morsel.user)
  morsels: Morsel[];
}
