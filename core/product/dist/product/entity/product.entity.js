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
exports.Product = exports.ProductStatus = void 0;
const category_entity_1 = require("../../category/entity/category.entity");
const typeorm_1 = require("typeorm");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["ATIVO"] = "ativo";
    ProductStatus["INATIVO"] = "inativo";
    ProductStatus["DESCONTINUADO"] = "descontinuado";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
let Product = class Product extends typeorm_1.BaseEntity {
    id;
    nome;
    SKU;
    preco_venda;
    preco_custo;
    categoria;
    codigo_barra;
    marca;
    modelo;
    quantidade_estoque;
    quantidade_minima;
    quantidade_maxima;
    unidade_de_medida;
    peso;
    status;
    data_descontinuacao;
    url_img;
    createdAt;
    updatedAt;
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "decimal",
        precision: 10,
        scale: 2
    }),
    __metadata("design:type", Number)
], Product.prototype, "SKU", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "decimal",
        precision: 10,
        scale: 2
    }),
    __metadata("design:type", Number)
], Product.prototype, "preco_venda", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "decimal",
        precision: 10,
        scale: 2
    }),
    __metadata("design:type", Number)
], Product.prototype, "preco_custo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.produtos),
    __metadata("design:type", category_entity_1.Category)
], Product.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "codigo_barra", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int4"
    }),
    __metadata("design:type", Number)
], Product.prototype, "quantidade_estoque", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int4"
    }),
    __metadata("design:type", Number)
], Product.prototype, "quantidade_minima", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int4"
    }),
    __metadata("design:type", Number)
], Product.prototype, "quantidade_maxima", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "unidade_de_medida", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "decimal",
        precision: 10,
        scale: 2
    }),
    __metadata("design:type", Number)
], Product.prototype, "peso", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ProductStatus,
        default: ProductStatus.INATIVO
    }),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Product.prototype, "data_descontinuacao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "url_img", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
//# sourceMappingURL=product.entity.js.map