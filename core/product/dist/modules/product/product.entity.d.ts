import { BaseEntity } from "typeorm";
export declare class Product extends BaseEntity {
    id: string;
    nome: string;
    preco_custo: number;
    preco_venda: number;
}
