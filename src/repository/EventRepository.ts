import { EVENT_TYPE, GENERE, MOVIE_TYPE } from "../Interfaces/enums";
import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";


export class BaseEventEntity implements IEntity {
    event_title: string;
    release_date: Date;
    language: string;
    duration_in_mins: number;
    id: number;
    constructor(event_title: string,release_date: Date, language: string, duration_in_mins: number) {
        this.event_title = event_title;
        this.release_date =  release_date;
        this.language = language;
        this.duration_in_mins = duration_in_mins;
        this.id = 0
    }
    getSerializedData() {
        return {
            event_title:this.event_title,
            release_date:this.release_date,
            language:this.language,
            duration_in_mins: this.duration_in_mins
        }
    }
}

export class MovieEntity extends BaseEventEntity {
    genere: GENERE;
    event_type: EVENT_TYPE;
    movie_type: MOVIE_TYPE;

    constructor(event_title: string,release_date: Date, language: string, duration_in_mins: number, genere: GENERE, movie_type: MOVIE_TYPE) {
            super(event_title, release_date, language, duration_in_mins);
            this.genere = genere;
            this.event_type = EVENT_TYPE.MOVIE;
            this.movie_type = movie_type
    }
    getSerializedData() {
        let serialized_data: any
        serialized_data = super.getSerializedData()
        serialized_data.genere = this.genere;
        serialized_data.event_type = this.event_type;
        serialized_data.movie_type = this.movie_type;
        return serialized_data
    }
}

export class StandupEntity extends BaseEventEntity {
    getSerializedData() {
        let serialized_data: any
        serialized_data = super.getSerializedData()
        serialized_data.event_type = EVENT_TYPE.STANDUP;
        return serialized_data
    }
}


// singleton pattern for repositories
export class EventRepository extends BaseRepository<BaseEventEntity> {
    private static repoObj: EventRepository;
    protected entity: BaseEventEntity[]; 
    constructor() {
        super();
        this.entity = []
    }

    public getRepositoryInstance(): EventRepository {
        if(EventRepository.repoObj) {
            return EventRepository.repoObj
        } else {
            EventRepository.repoObj = new EventRepository()
            return EventRepository.repoObj
        }
    }
}