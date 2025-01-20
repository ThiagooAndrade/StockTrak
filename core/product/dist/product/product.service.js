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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("./entity/product.entity");
const typeorm_1 = require("typeorm");
let ProductService = class ProductService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findOne(id) {
        const product = await this.repo.findOne({
            where: { id }
        });
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        return product;
    }
    findAll(query) {
        const queryBuilder = this.repo.createQueryBuilder('product');
        if (query.name) {
            queryBuilder.andWhere("product.name ILIKE :name", {
                name: `%${query.name}%`
            });
        }
        if (query.price) {
            queryBuilder.andWhere("product.price ILIKE :price", {
                price: `%${query.price}%`
            });
        }
        if (query.page && query.limit) {
            queryBuilder.skip((query.page - 1) * query.limit).take(query.limit);
        }
        ;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductService);
create(data, any);
Promise < product_entity_1.Product > {};
update(data, any, id, string | number);
Promise < product_entity_1.Product > {};
delete (id);
string | number;
Promise < void  > {};
helloProduct();
string;
{
    return "Hello Product!";
}
//# sourceMappingURL=product.service.js.map