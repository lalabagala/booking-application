import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";
import { TheatreEntity } from "./TheatreRepository";

export class AudiEntity implements IEntity {
    theatre: TheatreEntity;
    audi_title: string;
    id: number;
    total_seats: number;
    constructor(theatre: TheatreEntity, audi_title: string, total_seats: number) {
        this.theatre = theatre;
        this.audi_title = audi_title;
        this.total_seats = total_seats;
        this.id = 0
    }

    getSerializedData() {
        return {
            "theatre": this.theatre.getSerializedData(),
            "audi_title": this.audi_title
        }
    }
}


// singleton pattern for repositories
export class AudiRepository extends BaseRepository<AudiEntity> {
    private static repoObj: AudiRepository;
    protected entity: AudiEntity[]
    constructor() {
        super()
        this.entity = []
    }

    public getRepositoryInstance(): AudiRepository {
        if(AudiRepository.repoObj) {
            return AudiRepository.repoObj
        } else {
            AudiRepository.repoObj = new AudiRepository()
            return AudiRepository.repoObj
        }
    }
    public getAudiForTheatre(theatre: TheatreEntity): AudiEntity[] {
        return this.entity.filter(el=>{el.theatre.id == theatre.id});
    }
}