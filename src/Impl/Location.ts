import { IServiceLocation } from "../Interfaces/IServiceLocation";
import { IEntity } from "../repository/Interfaces/IEntity";
import { LocationEntity, ServiceLocationRepository } from "../repository/ServiceLocationRepository";

export class LocationService implements IServiceLocation {
    location_repo: ServiceLocationRepository;
    constructor() {
        this.location_repo = new ServiceLocationRepository().getRepositoryInstance();
    }
    addServiceLocation(locationEntity: LocationEntity): void {
        this.location_repo.create(locationEntity);
    }

    getAllServiceLocations(): IEntity[] {
        return this.location_repo.findAll();
    }

    getServiceLocation(location_id: number): LocationEntity | null{
        let l =  this.location_repo.findOne(location_id) as LocationEntity
        return l
    }
}