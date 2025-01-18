import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  nome: string

  preco_custo: string

}