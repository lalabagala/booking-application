import { IEntity } from "../repository/Interfaces/IEntity";
import { LocationEntity } from "../repository/ServiceLocationRepository";

export interface IServiceLocation {
    addServiceLocation(locationEntity: LocationEntity): void;
    getAllServiceLocations(): IEntity [];
    getServiceLocation(location_id: number): IEntity | null;
}