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
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], DoggoInput.prototype, "ownerId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], DoggoInput.prototype, "treats", void 0);
DoggoInput = __decorate([
    type_graphql_1.InputType()
], DoggoInput);
let DoggoResolver = class DoggoResolver {
    dogs() {
        return Doggo_1.Doggo.find();
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
    updateDog(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let dog = yield Doggo_1.Doggo.findOne(id);
            if (dog) {
                dog.name = name;
                return dog.save();
            }
            else {
                return undefined;
            }
        });
    }
    deleteDog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Doggo_1.Doggo.delete(id)) {
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "dogs", null);
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
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("name", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "updateDog", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "deleteDog", null);
DoggoResolver = __decorate([
    type_graphql_1.Resolver()
], DoggoResolver);
exports.DoggoResolver = DoggoResolver;
//# sourceMappingURL=doggo.js.map