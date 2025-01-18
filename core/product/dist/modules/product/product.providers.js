"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productProviders = void 0;
const product_entity_1 = require("./product.entity");
exports.productProviders = [
    {
        provide: "PHOTO_REPOSITORY",
        useFactory: (dataSource) => dataSource.getRepository(product_entity_1.Product),
        inject: ["DATA_SOURCE"]
    }
];
//# sourceMappingURL=product.providers.js.map