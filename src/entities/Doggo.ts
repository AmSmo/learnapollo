import { Field, Int, ObjectType } from "type-graphql";
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Doggo extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdDate = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedDate = new Date();

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => Int)
  @Column()
  ownerId: number;

  @Field()
  @ManyToOne(() => User, (user) => user.doggos)
  owner: User;

  @Field()
  @Column({ nullable: true })
  story: string;

  @Field()
  @Column({ type: "int", default: 0 })
  treats: number;

  @Field()
  textSnippet: string;
}
