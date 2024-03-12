import { AudiEntity } from "./Audi";
import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";

export class AudiRowEntity implements IEntity{
    row_id: string;
    audi: AudiEntity;
    id: number;
    seat_count: number;
    constructor(row_id: string, audi: AudiEntity, seat_count: number) {
        this.row_id = row_id;
        this.audi = audi;
        this.seat_count = seat_count;
        this.id = 0;
    }
    getSerializedData() {
        return {
            "row_id": this.row_id,
            "seat_count": this.seat_count,
            "audi": this.audi.getSerializedData()
        }
    }

}

export class AudiRowRepository extends BaseRepository<AudiRowEntity> {
    private static repoObj: AudiRowRepository;
    protected entity: AudiRowEntity[]
    constructor() {
        super()
        this.entity = []
    }

    public getRepositoryInstance(): AudiRowRepository {
        if(AudiRowRepository.repoObj) {
            return AudiRowRepository.repoObj
        } else {
            AudiRowRepository.repoObj = new AudiRowRepository()
            return AudiRowRepository.repoObj
        }
    }
    public getRowsForAudi(audi_id: number): AudiRowEntity[] {
        return this.entity.filter(el=>{ el.audi.id == audi_id});
    }
}