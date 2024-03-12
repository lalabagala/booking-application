import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";
import { LocationEntity } from "./ServiceLocationRepository";


export class TheatreEntity implements IEntity {
    theatre_name: string
    location: LocationEntity;
    address: string;
    id: number;
    constructor(theatre_name: string,location: LocationEntity, address: string) {
        this.location = location;
        this.address = address;
        this.theatre_name = theatre_name;
        this.id = 0

    }
    getSerializedData() {
        return {
            "location": this.location,
            "address": this.address
        }
    }
}


// singleton pattern for repositories
export class TheatreRepository extends BaseRepository<TheatreEntity> {
    private static repoObj: TheatreRepository;
    protected entity: TheatreEntity[];
    constructor() {
        super()
        this.entity = []
    }

    public getRepositoryInstance(): TheatreRepository {
        if(TheatreRepository.repoObj) {
            return TheatreRepository.repoObj
        } else {
            TheatreRepository.repoObj = new TheatreRepository()
            return TheatreRepository.repoObj
        }
    }

    public getTheatreForLocation(location: string): TheatreEntity[] {
        return this.entity.filter(el=>{
            return el.location.location == location
        })
    }
}