

export interface BaseService<T> {
  findOne(id: string | number): Promise<T>;

  findAll(query: any): Promise<T[]>;

  create(data: any): Promise<T>;

  update(data: any, id: string | number): Promise<T>;

  delete(id: string | number): Promise<void>;
}
