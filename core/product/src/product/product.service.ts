import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/interface/service/BaseService';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService implements BaseService<Product> {

  constructor(private readonly repo: Repository<Product>) { }

  public async findOne(id: string): Promise<Product> {
    const product = await this.repo.findOne({
      where: { id }
    });

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    return product;
  }

  public async findAll(query: any): Promise<Product[]> {
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
      queryBuilder.skip((query.page - 1) * query.limit).take(query.limit)
    };

    return await queryBuilder.getMany();
  }

  public async create(data: any): Promise<Product> {
    const product = this.repo.create(data);
    return this.repo.save(product[0]);
  }

  public async update(data: any, id: string): Promise<Product> {
    const product = this.repo.findOne({
      where: {
        id
      }
    });

    Object.assign(product, data);

    return await this.repo.save(product[0]);
  }


  public async delete(id: string): Promise<void> {
    const product = this.repo.findOne({
      where: {
        id
      }
    })

    await this.repo.remove(product);
  }
}
