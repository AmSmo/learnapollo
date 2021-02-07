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
  FieldResolver,
  Root,
} from "type-graphql";
import { MyContext } from "../types";
import { isAuthenticated } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@InputType()
class DoggoInput {
  @Field()
  name: string;
  @Field()
  story?: string;
}

@Resolver(Doggo)
export class DoggoResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Doggo) {
    return root.story.slice(0, 50) + "...";
  }

  @Query(() => [Doggo])
  dogs(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<Doggo[]> {
    const realLimit = Math.min(50, limit);
    const qb = getConnection()
      .getRepository(Doggo)
      .createQueryBuilder("d")
      .orderBy('"createdDate"', "DESC")
      .take(realLimit);

    if (cursor) {
      qb.where('"createdDate" < :cursor', {
        cursor: new Date(parseInt(cursor)),
      });
    }
    return qb.getMany();
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
    console.log("into", req);
    if (!req.session.userId) {
      throw new Error("Not Authenticated");
    }
    console.log(req.session);

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
