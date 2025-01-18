import type { Product } from "src/modules/product/product.entity";
import type { Repository } from "typeorm";
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    hello(): string;
}
