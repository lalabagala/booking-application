import { AudiEntity } from "./Audi";
import { AudiRowEntity } from "./AudiRows";
import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";


export class SeatsEntity implements IEntity {
    audi: AudiEntity;
    row: AudiRowEntity;
    seat_number: number;
    id: number;
    constructor(audi: AudiEntity, row: AudiRowEntity, seat_number: number) {
        this.audi = audi;
        this.row = row
        this.seat_number = seat_number;
        this.id = 0
    }
    getSerializedData() {
        return {
            "audi": this.audi.getSerializedData(),
            "row": this.row.getSerializedData(),
            "seat_number": this.seat_number
        }
    }
}


// singleton pattern for repositories
export class SeatsRepository extends BaseRepository<SeatsEntity> {
    private static repoObj: SeatsRepository;
    protected entity: SeatsEntity[];
    constructor() {
        super();
        this.entity = []
    }

    public getRepositoryInstance(): SeatsRepository {
        if(SeatsRepository.repoObj) {
            return SeatsRepository.repoObj
        } else {
            SeatsRepository.repoObj = new SeatsRepository()
            return SeatsRepository.repoObj
        }
    }

    public getSeatsInAudi(audi: AudiEntity):SeatsEntity[] {
        return this.entity.filter(el=> {
            el.audi.id == audi.id
        });
    }
}