import { IEntity } from "./Interfaces/IEntity";
import { IRead } from "./Interfaces/IRead";
import { IWrite } from "./Interfaces/IWrite";

// interface segregation I in solid
export abstract class BaseRepository<T extends IEntity> implements IRead<IEntity>, IWrite<IEntity> {
    // abstract getRepositoryInstance(): BaseRepository<IEntity>;
    private id_counter = 0;
    protected entity: IEntity[] = []
    constructor(){
        this.entity = []
    }

    delete(entity: IEntity): boolean {
        throw new Error("Method not implemented.");
    }

    create(entityObj: IEntity): IEntity {
        this.id_counter+=1;
        entityObj.id = this.id_counter
        this.entity.push(entityObj)
        return entityObj
    }

    update(entityObj: IEntity): IEntity {
        for (let i in this.entity) {
            if(this.entity[i].id == entityObj.id) {
                this.entity[i] = entityObj
                return entityObj
            }
        }
        return entityObj
    }
    
    findAll(): IEntity[] {
        return this.entity
    }

    findOne(id: number): IEntity | null {
        for (let i in this.entity) {
            if(this.entity[i].id == id) {
                return this.entity[i]
            }
        }
        return null
    }

}