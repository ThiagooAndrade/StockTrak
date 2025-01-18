import { Controller, Get } from "@nestjs/common";
import type { ProductService } from "./product.service";
import type { Product } from "./product.entity";


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get()
  hello(): string {
    return this.productService.hello();
  }
}