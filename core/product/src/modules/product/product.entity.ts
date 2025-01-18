import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  nome: string

  @Column('decimal', {
    precision: 10,
    scale: 2
  })
  preco_custo: number

  @Column('decimal', {
    precision: 10,
    scale: 2
  })
  preco_venda: number
}
