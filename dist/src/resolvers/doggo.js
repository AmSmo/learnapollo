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
let DoggoResolver = class DoggoResolver {
    dogs({ em }) {
        return em.find(Doggo_1.Doggo, {});
    }
    dog(id, { em }) {
        return em.findOne(Doggo_1.Doggo, { id });
    }
    createDog(name, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const dog = em.create(Doggo_1.Doggo, { name });
            yield em.persistAndFlush(dog);
            return dog;
        });
    }
    updateDog(id, name, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            let dog = yield em.findOne(Doggo_1.Doggo, { id });
            if (dog) {
                dog.name = name;
                yield em.persistAndFlush(dog);
                return dog;
            }
            else {
                return null;
            }
        });
    }
    deleteDog(id, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (em.nativeDelete(Doggo_1.Doggo, { id })) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Doggo_1.Doggo]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "dogs", null);
__decorate([
    type_graphql_1.Query(() => Doggo_1.Doggo, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "dog", null);
__decorate([
    type_graphql_1.Mutation(() => Doggo_1.Doggo, { nullable: true }),
    __param(0, type_graphql_1.Arg("name", () => String)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "createDog", null);
__decorate([
    type_graphql_1.Mutation(() => Doggo_1.Doggo, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("name", () => String)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "updateDog", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "deleteDog", null);
DoggoResolver = __decorate([
    type_graphql_1.Resolver()
], DoggoResolver);
exports.DoggoResolver = DoggoResolver;
//# sourceMappingURL=doggo.js.map