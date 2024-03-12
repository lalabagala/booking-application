import { IEntity } from "../repository/Interfaces/IEntity";

export interface IServiceLocation {
    location_name: string;
    addServiceLocation(): void
    getAllServiceLocations(): IEntity []
}