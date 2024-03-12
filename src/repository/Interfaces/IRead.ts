export interface IRead<T> {
    findAll(): T[];
    findOne(id: number): T | null;
  }
  