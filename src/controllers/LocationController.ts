import { LocationService } from "../Impl/Location";
import { LocationEntity } from "../repository/ServiceLocationRepository";

export class LocationController {
    location_service: LocationService;

    constructor() {
        this.location_service = new LocationService()
    }
    public addLocation(location_name: string) {
        let location:LocationEntity = new LocationEntity(location_name);
        return this.location_service.addServiceLocation(location);
    }
    public getAllLocations() {
        return this.location_service.getAllServiceLocations()
    }
}