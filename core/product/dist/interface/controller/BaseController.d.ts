import { BaseService } from "../service/BaseService";
export declare abstract class BaseController<T> {
    protected readonly service: BaseService<T>;
    constructor(service: BaseService<T>);
    findAll(query: any): Promise<T[]>;
    findOne(id: string): Promise<T>;
    create(dto: any): Promise<T>;
    update(id: string, dto: any): Promise<T>;
    delete(id: string): Promise<void>;
}
