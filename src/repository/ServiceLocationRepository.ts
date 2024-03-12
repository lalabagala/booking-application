import { USER_TYPE } from "../Interfaces/enums";
import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";


export class LocationEntity implements IEntity {
    location: string
    id: number;
    constructor(location: string) {
        this.location = location;
        this.id = 0
    }
    getSerializedData() {
        return {
            "location": this.location
        }
    }
}


// singleton pattern for repositories
export class ServiceLocationRepository extends BaseRepository<LocationEntity> {
    private static repoObj: ServiceLocationRepository;
    constructor() {
        super()
    }

    public getRepositoryInstance(): ServiceLocationRepository {
        if(ServiceLocationRepository.repoObj) {
            return ServiceLocationRepository.repoObj
        } else {
            ServiceLocationRepository.repoObj = new ServiceLocationRepository()
            return ServiceLocationRepository.repoObj
        }
    }
}