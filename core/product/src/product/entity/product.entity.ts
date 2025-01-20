import { Category } from "src/category/entity/category.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum ProductStatus {
  ATIVO = "ativo",
  INATIVO = "inativo",
  DESCONTINUADO = "descontinuado"
}
@Entity()
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  nome: string

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2
  })
  SKU: number

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2
  })
  preco_venda: number

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2
  })
  preco_custo: number

  @ManyToOne(() => Category, (category) => category.produtos)
  categoria: Category

  @Column()
  codigo_barra: string

  @Column()
  marca: string

  @Column()
  modelo: string

  @Column({
    type: "int4"
  })
  quantidade_estoque: number

  @Column({
    type: "int4"
  })
  quantidade_minima: number

  @Column({
    type: "int4"
  })
  quantidade_maxima: number

  @Column()
  unidade_de_medida: string

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2
  })
  peso: number

  @Column({
    type: "enum",
    enum: ProductStatus,
    default: ProductStatus.INATIVO
  })
  status: ProductStatus

  @Column()
  data_descontinuacao: Date

  @Column()
  url_img: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
