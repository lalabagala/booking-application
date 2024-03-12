export interface IWrite<T> {
    create(entity: T):  T;
    update(entity: T):  T;
    delete(entity: T): boolean;
}