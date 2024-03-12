import { AudiEntity } from "./Audi";
import { BaseRepository } from "./BaseRepository";
import { BaseEventEntity } from "./EventRepository";
import { IEntity } from "./Interfaces/IEntity";

export class ShowEntity implements IEntity{
    audi: AudiEntity;
    start_time: Date;
    end_time: Date;
    event: BaseEventEntity;
    id: number | null;
    date: Date;
    current_availability: number
    constructor(audi: AudiEntity, start_time: Date, end_time: Date, event: BaseEventEntity, date: Date, current_availability: number) {
        this.audi = audi;
        this.start_time = start_time;
        this.end_time = end_time;
        this.event = event;
        this.date = date;
        this.id = null;
        this.current_availability = current_availability
    }
    getSerializedData() {
        return {
            "audi": this.audi.getSerializedData(),
            "start_time": this.start_time,
            "end_time": this.end_time,
            "date": this.date,
            "event" : this.event.getSerializedData()
        }
    }
}

export class ShowRepository extends BaseRepository<ShowEntity> {
    private static repoObj: ShowRepository;
    protected entity: ShowEntity[]
    constructor() {
        super()
        this.entity = []
    }

    public getRepositoryInstance(): ShowRepository {
        if(ShowRepository.repoObj) {
            return ShowRepository.repoObj
        } else {
            ShowRepository.repoObj = new ShowRepository()
            return ShowRepository.repoObj
        }
    }

    public getShowForAudis(audis: AudiEntity[]):ShowEntity[] {
        let audi_ids = audis.map(el=>{return el.id});
        let shows = this.entity.filter(el=> {
            return audi_ids.includes(el.audi.id)
        });
        return shows
    }

    public getShowsForDate(date: Date): ShowEntity[] {
        return this.entity.filter(el=>{el.date == date});
    }
    public getShowsForEvents(events: BaseEventEntity[]): ShowEntity[] {
        let event_ids = events.map(el=> {return el.id});
        return this.entity.filter(el=> event_ids.includes(el.event.id));
    }
}