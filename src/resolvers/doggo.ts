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
  ObjectType,
} from "type-graphql";
import { MyContext } from "../types";
import { isAuthenticated } from "../middleware/isAuth";
import { getConnection } from "typeorm";
import { Morsel } from "../entities/Morsel";

@InputType()
class DoggoInput {
  @Field()
  name: string;
  @Field()
  story?: string;
}

@ObjectType()
class PaginatedDoggos {
  @Field(() => [Doggo])
  doggos: Doggo[];

  @Field()
  hasMore: boolean;
}

@Resolver(Doggo)
export class DoggoResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Doggo) {
    return root.story.slice(0, 50) + "...";
  }

  @Query(() => PaginatedDoggos)
  async doggos(
    @Ctx() { req }: MyContext,
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedDoggos> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    const replacements: any[] = [realLimitPlusOne, req.session.userId || null];
    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const doggoList = await getConnection().query(
      `
      SELECT d.*, 
      json_build_object(
        'id', u.id,
        'username', u.username,
        'createdDate', u."createdDate",
        'updatedDate', u."updatedDate",
        'email', u.email  
      ) as owner,
      ${
        req.session.userId
          ? `(select value from morsel where "userId" = $2 AND "doggoId" = d.id) as "treatStatus"`
          : `null as "treatStatus"`
      }
      FROM doggo as d
      INNER JOIN public.user as u
      ON d."ownerId" = u.id
      ${cursor ? `WHERE d."createdDate" < $3` : ""}
      ORDER BY d."createdDate" DESC
      limit $1
    `,
      replacements
    );

    return {
      doggos: doggoList.slice(0, realLimit),
      hasMore: doggoList.length === realLimitPlusOne,
    };
  }

  @Query(() => Doggo, { nullable: true })
  dog(@Arg("id", () => Int) id: number): Promise<Doggo | undefined> {
    return Doggo.findOne(id, { relations: ["owner"] });
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

  @Mutation(() => Boolean)
  @UseMiddleware(isAuthenticated)
  async feed(
    @Arg("doggoId", () => Int) doggoId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const isTreat = value !== -1;
    const realValue = isTreat ? 1 : -1;
    const { userId } = req.session;
    const alreadyFed = await Morsel.findOne({ where: { userId, doggoId } });
    if (alreadyFed && alreadyFed.value !== realValue) {
      alreadyFed.value = realValue;
      await alreadyFed.save();
      getConnection().query(`
        UPDATE doggo
      set treats = treats + ${2 * realValue}
      where doggo.id = ${doggoId};
`);
    } else if (alreadyFed) {
      return true;
    } else {
      await getConnection().query(
        `
      START TRANSACTION;

      INSERT INTO morsel ("userId", "doggoId", "value")
      values ( ${userId} ,${doggoId} ,${realValue} );
      
      UPDATE doggo
      set treats = treats + ${realValue}
      where doggo.id = ${doggoId};
      COMMIT;`
      );
    }
    return true;
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
