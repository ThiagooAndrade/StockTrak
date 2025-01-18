import type { ProductService } from "./product.service";
import type { Product } from "./product.entity";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    hello(): string;
}
