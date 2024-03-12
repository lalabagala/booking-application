import { IServiceLocation } from "../Interfaces/IServiceLocation";
import { IEntity } from "../repository/Interfaces/IEntity";
import { LocationEntity, ServiceLocationRepository } from "../repository/ServiceLocationRepository";

export class LocationService implements IServiceLocation {
    location_name: string;
    location_repo: ServiceLocationRepository;
    constructor(location_name: string) {
        this.location_name = location_name;
        this.location_repo = new ServiceLocationRepository();
    }
    addServiceLocation(): void {
        let locationEntity = new LocationEntity(this.location_name);
        this.location_repo.create(locationEntity);
    }

    getAllServiceLocations(): IEntity[] {
        return this.location_repo.findAll();
    }
}