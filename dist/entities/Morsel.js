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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Morsel = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Doggo_1 = require("./Doggo");
const User_1 = require("./User");
let Morsel = class Morsel extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "int" }),
    __metadata("design:type", Number)
], Morsel.prototype, "value", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Morsel.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Morsel.prototype, "doggoId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.morsels),
    typeorm_1.Column(),
    __metadata("design:type", User_1.User)
], Morsel.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Doggo_1.Doggo, (doggo) => doggo.morsels),
    __metadata("design:type", Doggo_1.Doggo)
], Morsel.prototype, "doggo", void 0);
Morsel = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Morsel);
exports.Morsel = Morsel;
//# sourceMappingURL=Morsel.js.map