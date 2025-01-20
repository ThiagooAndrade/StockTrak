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
exports.Category = void 0;
const product_entity_1 = require("../../product/entity/product.entity");
const typeorm_1 = require("typeorm");
let Category = class Category extends typeorm_1.BaseEntity {
    id;
    nome;
    categoria_pai;
    filhos;
    produtos;
};
exports.Category = Category;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category, (category) => category.filhos, { nullable: true }),
    __metadata("design:type", Number)
], Category.prototype, "categoria_pai", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Category, (category) => category.categoria_pai),
    __metadata("design:type", Array)
], Category.prototype, "filhos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (produto) => produto.categoria),
    __metadata("design:type", Array)
], Category.prototype, "produtos", void 0);
exports.Category = Category = __decorate([
    (0, typeorm_1.Entity)()
], Category);
//# sourceMappingURL=category.entity.js.map