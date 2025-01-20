import { Category } from "src/category/entity/category.entity";
import { BaseEntity } from "typeorm";
export declare enum ProductStatus {
    ATIVO = "ativo",
    INATIVO = "inativo",
    DESCONTINUADO = "descontinuado"
}
export declare class Product extends BaseEntity {
    id: string;
    nome: string;
    SKU: number;
    preco_venda: number;
    preco_custo: number;
    categoria: Category;
    codigo_barra: string;
    marca: string;
    modelo: string;
    quantidade_estoque: number;
    quantidade_minima: number;
    quantidade_maxima: number;
    unidade_de_medida: string;
    peso: number;
    status: ProductStatus;
    data_descontinuacao: Date;
    url_img: string;
    createdAt: Date;
    updatedAt: Date;
}
