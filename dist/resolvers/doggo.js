"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoggoResolver = void 0;
const Doggo_1 = require("../entities/Doggo");
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../middleware/isAuth");
const typeorm_1 = require("typeorm");
const Morsel_1 = require("../entities/Morsel");
const User_1 = require("../entities/User");
let DoggoInput = class DoggoInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], DoggoInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], DoggoInput.prototype, "story", void 0);
DoggoInput = __decorate([
    type_graphql_1.InputType()
], DoggoInput);
let PaginatedDoggos = class PaginatedDoggos {
};
__decorate([
    type_graphql_1.Field(() => [Doggo_1.Doggo]),
    __metadata("design:type", Array)
], PaginatedDoggos.prototype, "doggos", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], PaginatedDoggos.prototype, "hasMore", void 0);
PaginatedDoggos = __decorate([
    type_graphql_1.ObjectType()
], PaginatedDoggos);
let DoggoResolver = class DoggoResolver {
    textSnippet(root) {
        return root.story.slice(0, 50) + "...";
    }
    owner(doggo, { userLoader }) {
        return userLoader.load(doggo.ownerId);
    }
    treatStatus(doggo, { treatLoader, req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                return null;
            }
            console.log();
            const treat = yield treatLoader.load({
                doggoId: doggo.id,
                userId: doggo.ownerId,
            });
            return treat ? treat.value : null;
        });
    }
    doggos({ req }, limit, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(50, limit);
            const realLimitPlusOne = realLimit + 1;
            const replacements = [realLimitPlusOne];
            if (cursor) {
                replacements.push(new Date(parseInt(cursor)));
            }
            const doggoList = yield typeorm_1.getConnection().query(`
      SELECT d.*
      FROM doggo as d
      INNER JOIN public.user as u
      ON d."ownerId" = u.id
      ${cursor ? `WHERE d."createdDate" < $2` : ""}
      ORDER BY d."createdDate" DESC
      limit $1
    `, replacements);
            return {
                doggos: doggoList.slice(0, realLimit),
                hasMore: doggoList.length === realLimitPlusOne,
            };
        });
    }
    dog(id) {
        return Doggo_1.Doggo.findOne(id);
    }
    createDog(options, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                throw new Error("Not Authenticated");
            }
            return Doggo_1.Doggo.create(Object.assign(Object.assign({}, options), { ownerId: req.session.userId })).save();
        });
    }
    updateDog(id, name, story, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(Doggo_1.Doggo)
                .set({ name, story })
                .where(`id = :id and "ownerId" = :ownerId`, {
                id,
                ownerId: req.session.userId,
            })
                .returning("*")
                .execute();
            if (result) {
                return result.raw[0];
            }
            else {
                return undefined;
            }
        });
    }
    feed(doggoId, value, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isTreat = value !== -1;
            const realValue = isTreat ? 1 : -1;
            const { userId } = req.session;
            const alreadyFed = yield Morsel_1.Morsel.findOne({ where: { userId, doggoId } });
            if (alreadyFed && alreadyFed.value !== realValue) {
                alreadyFed.value = realValue;
                yield alreadyFed.save();
                typeorm_1.getConnection().query(`
        UPDATE doggo
      set treats = treats + ${2 * realValue}
      where doggo.id = ${doggoId};
`);
            }
            else if (alreadyFed) {
                return true;
            }
            else {
                yield typeorm_1.getConnection().query(`
      START TRANSACTION;

      INSERT INTO morsel ("userId", "doggoId", "value")
      values ( ${userId} ,${doggoId} ,${realValue} );
      
      UPDATE doggo
      set treats = treats + ${realValue}
      where doggo.id = ${doggoId};
      COMMIT;`);
            }
            return true;
        });
    }
    deleteDog(id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const doggo = yield Doggo_1.Doggo.findOne(id);
            if (!doggo) {
                return false;
            }
            if (doggo.ownerId !== req.session.userId) {
                throw new Error("Not Authorized");
            }
            yield Doggo_1.Doggo.delete({ id });
            return true;
        });
    }
};
__decorate([
    type_graphql_1.FieldResolver(() => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Doggo_1.Doggo]),
    __metadata("design:returntype", void 0)
], DoggoResolver.prototype, "textSnippet", null);
__decorate([
    type_graphql_1.FieldResolver(() => User_1.User),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Doggo_1.Doggo, Object]),
    __metadata("design:returntype", void 0)
], DoggoResolver.prototype, "owner", null);
__decorate([
    type_graphql_1.FieldResolver(() => type_graphql_1.Int, { nullable: true }),
    __param(0, type_graphql_1.Root()),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Doggo_1.Doggo, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "treatStatus", null);
__decorate([
    type_graphql_1.Query(() => PaginatedDoggos),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg("limit", () => type_graphql_1.Int)),
    __param(2, type_graphql_1.Arg("cursor", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "doggos", null);
__decorate([
    type_graphql_1.Query(() => Doggo_1.Doggo, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "dog", null);
__decorate([
    type_graphql_1.Mutation(() => Doggo_1.Doggo, { nullable: true }),
    type_graphql_1.UseMiddleware(isAuth_1.isAuthenticated),
    __param(0, type_graphql_1.Arg("options")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DoggoInput, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "createDog", null);
__decorate([
    type_graphql_1.Mutation(() => Doggo_1.Doggo, { nullable: true }),
    type_graphql_1.UseMiddleware(isAuth_1.isAuthenticated),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("name", () => String)),
    __param(2, type_graphql_1.Arg("story", () => String)),
    __param(3, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "updateDog", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    type_graphql_1.UseMiddleware(isAuth_1.isAuthenticated),
    __param(0, type_graphql_1.Arg("doggoId", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("value", () => type_graphql_1.Int)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "feed", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean, { nullable: true }),
    type_graphql_1.UseMiddleware(isAuth_1.isAuthenticated),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "deleteDog", null);
DoggoResolver = __decorate([
    type_graphql_1.Resolver(Doggo_1.Doggo)
], DoggoResolver);
exports.DoggoResolver = DoggoResolver;
//# sourceMappingURL=doggo.js.map