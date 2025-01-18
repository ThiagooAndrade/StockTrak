import { Inject, Injectable } from "@nestjs/common";
import type { Product } from "src/modules/product/product.entity";
import type { Repository } from "typeorm";


@Injectable()
export class ProductService {
  constructor(
    @Inject("PHOTO_REPOSITORY")
    private productRepository: Repository<Product>
  ) { }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  hello(): string {
    return "Hello World!"
  }
}