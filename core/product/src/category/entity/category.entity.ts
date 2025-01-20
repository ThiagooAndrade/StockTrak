import { Product } from "src/product/entity/product.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @ManyToOne(() => Category, (category) => category.filhos, { nullable: true })
  categoria_pai: number

  @OneToMany(() => Category, (category) => category.categoria_pai)
  filhos: Category[];

  @OneToMany(() => Product, (produto) => produto.categoria)
  produtos: Product[]
}
