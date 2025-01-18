"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const product_entity_1 = require("../modules/product/product.entity");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: "DATA_SOURCE",
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: "postgres",
                host: process.env.DB_HOST,
                port: Number(process.env.PORT) || 5432,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [product_entity_1.Product],
                synchronize: true,
                logging: true
            });
            return dataSource.initialize();
        }
    }
];
//# sourceMappingURL=database.providers.js.map