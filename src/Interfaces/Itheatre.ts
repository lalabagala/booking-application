import { IEntity } from "../repository/Interfaces/IEntity";
import { LocationEntity } from "../repository/ServiceLocationRepository";
import { TheatreEntity } from "../repository/TheatreRepository";

export interface ITheatre {
    addTheatre(theatreEntity: TheatreEntity): IEntity
    getTheatresForLocation(location: LocationEntity):TheatreEntity[];
    getTheatreById(theatre_id: number): TheatreEntity
}