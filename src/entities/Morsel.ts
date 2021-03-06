import { Field, Int, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, ManyToOne, PrimaryColumn } from "typeorm";
import { Doggo } from "./Doggo";
import { User } from "./User";

@ObjectType()
@Entity()
export class Morsel extends BaseEntity {
  @Field()
  @Column({ type: "int" })
  value: number;

  @Field(() => Int)
  @PrimaryColumn()
  userId: number;

  @Field(() => Int)
  @PrimaryColumn()
  doggoId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.morsels)
  user: User;

  @Field(() => Doggo)
  @ManyToOne(() => Doggo, (doggo) => doggo.morsels, { onDelete: "CASCADE" })
  doggo: Doggo;
}
