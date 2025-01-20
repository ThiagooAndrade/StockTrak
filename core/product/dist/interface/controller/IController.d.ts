export interface IController<T> {
    listOne(id: string | number): Promise<T | null>;
}
