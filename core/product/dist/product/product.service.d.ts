import { BaseService } from 'src/interface/service/BaseService';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
export declare class ProductService implements BaseService<Product> {
    private readonly repo;
    constructor(repo: Repository<Product>);
    findOne(id: string): Promise<Product>;
    findAll(query: any): Promise<Product[]>;
}
