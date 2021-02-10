import { Request, Response } from "express";
import { Session } from "express-session";
import { Redis } from "ioredis";
import { createUserLoader } from "./utils/createUserLoader";
import { createTreatLoader } from "./utils/createTreatLoader";
declare module "express-session" {
  export interface SessionData {
    userId: number;
  }
}
export type MyContext = {
  req: Request & { session: Session };
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof createUserLoader>;
  treatLoader: ReturnType<typeof createTreatLoader>;
};
