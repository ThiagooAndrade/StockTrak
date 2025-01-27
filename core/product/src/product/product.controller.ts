import { BaseController } from 'src/interface/controller/BaseController';
import { ProductService } from './product.service';
import { Controller, Get } from '@nestjs/common';
import { Product } from './entity/product.entity';

@Controller('product')
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService)
  }

  @Get()
  async listAll(): Promise<Product[]> {
    return await this.productService.findAll({});
  }

}
