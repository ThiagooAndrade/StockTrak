import { BaseController } from 'src/interface/controller/BaseController';
import { ProductService } from './product.service';
export declare class ProductController extends BaseController {
    private readonly productService;
    constructor(productService: ProductService);
    helloProduct(): string;
}
