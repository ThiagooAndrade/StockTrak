import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/entity/product.entity';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entity/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Product, Category],
      migrations: [__dirname + 'migrations/*.js'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
