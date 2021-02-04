import { Entity, PrimaryKey, Property } from "@mikro-orm/core"

@Entity()
export class Doggo {

  @PrimaryKey()
  id!: number;

  @Property({type: "date"})
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name!: string;
}