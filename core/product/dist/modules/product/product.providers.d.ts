import type { DataSource } from "typeorm";
import { Product } from "./product.entity";
export declare const productProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Product>;
    inject: string[];
}[];
