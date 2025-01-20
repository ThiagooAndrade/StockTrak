import { DataSource } from 'typeorm';
import { Category } from './category/entity/category.entity';
import { Product } from './product/entity/product.entity';

export const AppDataSource = new DataSource({
  type: 'postgres', // ou o banco de dados que você estiver usando
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: 'senha_do_banco',
  database: 'nome_do_banco',
  entities: [Category, Product],
  synchronize: false, // Evite usar isso em produção
  migrations: ['/migrations/**/*.ts'],
  logging: true,
});
