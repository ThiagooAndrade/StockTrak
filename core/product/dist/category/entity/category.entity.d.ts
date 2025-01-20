import { Product } from "src/product/entity/product.entity";
import { BaseEntity } from "typeorm";
export declare class Category extends BaseEntity {
    id: number;
    nome: string;
    categoria_pai: number;
    filhos: Category[];
    produtos: Product[];
}
