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
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DoggoResolver.prototype, "dog", null);
DoggoResolver = __decorate([
    type_graphql_1.Resolver()
], DoggoResolver);
exports.DoggoResolver = DoggoResolver;
//# sourceMappingURL=doggo.js.map