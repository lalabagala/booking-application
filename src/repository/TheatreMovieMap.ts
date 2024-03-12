import { BaseRepository } from "./BaseRepository";
import { BaseEventEntity } from "./EventRepository";
import { IEntity } from "./Interfaces/IEntity";
import { TheatreEntity } from "./TheatreRepository";

export class TheatreEventMapEntity implements IEntity {
    id: number
    theatre: TheatreEntity;
    event: BaseEventEntity;
    is_active: Boolean;

    constructor(theatre: TheatreEntity, event: BaseEventEntity, is_active: Boolean) {
        this.id = 0
        this.theatre = theatre;
        this.event = event;
        this.is_active = is_active
        
    }
    getSerializedData() {
        return { 
            "event" : this.event.getSerializedData(),
            "theatre": this.theatre.getSerializedData(),
            "is_active": this.is_active
        }
    }

}


export class TheatreEventMap extends BaseRepository<TheatreEventMapEntity>{
    protected entity: TheatreEventMapEntity[];
    private static repoObj: TheatreEventMap;
    constructor() {
        super();
        this.entity = []
    }
    public getRepositoryInstance(): TheatreEventMap {
        if(TheatreEventMap.repoObj) {
            return TheatreEventMap.repoObj
        } else {
            TheatreEventMap.repoObj = new TheatreEventMap()
            return TheatreEventMap.repoObj
        }
    }
}