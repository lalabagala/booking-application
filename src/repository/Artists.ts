import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";

export class ArtistsEntity implements IEntity {
    id: number | null;
    actor_name: string;
    dob: Date;
    constructor(actor_name: string, dob: Date) {
        this.actor_name = actor_name;
        this.dob = dob
        this.id = null;
    }
    getSerializedData() {
        return {
            "actor_name": this.actor_name,
            "dob": this.dob
        }
    }
}

export class ArtistsRepository extends BaseRepository<ArtistsEntity> {
    private static repoObj: ArtistsRepository;
    protected entity: ArtistsEntity[]
    constructor() {
        super()
        this.entity = []
    }

    public getRepositoryInstance(): ArtistsRepository {
        if(ArtistsRepository.repoObj) {
            return ArtistsRepository.repoObj
        } else {
            ArtistsRepository.repoObj = new ArtistsRepository()
            return ArtistsRepository.repoObj
        }
    }
}
