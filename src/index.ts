import { MikroORM } from "@mikro-orm/core";
import { COOKIE_NAME, __prod__ } from "./constants";
import "reflect-metadata";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { DoggoResolver } from "./resolvers/doggo";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { secretInfo } from "./config/keys";
import { MyContext } from "./types";
import cors from "cors";
import { User } from "./entities/User";

const main = async () => {
  const RedisStore = connectRedis(session);
  const redis = new Redis();
  const orm = await MikroORM.init(microConfig);
  await orm.em.nativeDelete(User, {});
  await orm.getMigrator().up();

  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 24 * 365,
        httpOnly: true,
        secure: __prod__,
        sameSite: "lax",
      },
      secret: secretInfo.mySecret,
      resave: false,
      saveUninitialized: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [DoggoResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res, redis }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.get("/", (_, res) => {
    res.send("POTATO");
  });
  app.listen(5000, () => {
    console.log("Server successfully created");
  });
};

main().catch((err) => {
  console.error(err);
});
