import type { DataSource } from "typeorm";
import { Product } from "./product.entity";

export const productProviders = [
  {
    provide: "PHOTO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: ["DATA_SOURCE"]
  }
]