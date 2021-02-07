import { Doggo } from "../entities/Doggo";
import {
  Resolver,
  Query,
  Int,
  Arg,
  Mutation,
  InputType,
  Field,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import { MyContext } from "../types";
import { isAuthenticated } from "../middleware/isAuth";

@InputType()
class DoggoInput {
  @Field()
  name: string;
  @Field()
  story: string;
  @Field()
  ownerId: number;
  @Field()
  treats: number;
}

@Resolver()
export class DoggoResolver {
  @Query(() => [Doggo])
  dogs(): Promise<Doggo[]> {
    return Doggo.find();
  }

  @Query(() => Doggo, { nullable: true })
  dog(@Arg("id", () => Int) id: number): Promise<Doggo | undefined> {
    return Doggo.findOne(id);
  }

  @Mutation(() => Doggo, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async createDog(
    @Arg("options") options: DoggoInput,
    @Ctx() { req }: MyContext
  ): Promise<Doggo> {
    if (!req.session.userId) {
      throw new Error("Not Authenticated");
    }
    return Doggo.create({ ...options, ownerId: req.session.userId }).save();
  }

  @Mutation(() => Doggo, { nullable: true })
  async updateDog(
    @Arg("id", () => Int) id: number,
    @Arg("name", () => String) name: string
  ): Promise<Doggo | undefined> {
    let dog = await Doggo.findOne(id);
    if (dog) {
      dog.name = name;
      return dog.save();
    } else {
      return undefined;
    }
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteDog(@Arg("id", () => Int) id: number): Promise<boolean> {
    if (Doggo.delete(id)) {
      return true;
    } else {
      return false;
    }
  }
}
