"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category/entity/category.entity");
const product_entity_1 = require("./product/entity/product.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: 'senha_do_banco',
    database: 'nome_do_banco',
    entities: [category_entity_1.Category, product_entity_1.Product],
    synchronize: false,
    migrations: ['/migrations/**/*.ts'],
    logging: true,
});
//# sourceMappingURL=data-source.js.map