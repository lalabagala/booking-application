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
    protected entity: LocationEntity[];
    constructor() {
        super();
        this.entity = []
        super.entity = this.entity
    }

    public getRepositoryInstance(): ServiceLocationRepository {
        if(ServiceLocationRepository.repoObj) {
            return ServiceLocationRepository.repoObj
        } else {
            ServiceLocationRepository.repoObj = new ServiceLocationRepository()
            return ServiceLocationRepository.repoObj
        }
    }

    public getLocationForId(location_id: number): LocationEntity {
        return this.entity.filter(el=> el.id==location_id)[0]
    }
}