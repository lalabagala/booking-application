import { MovieEntity } from "../repository/EventRepository";
import { IEntity } from "../repository/Interfaces/IEntity";
import { EventService } from "./Event";

export class MovieService extends EventService {
    addEvent(movie: MovieEntity): IEntity {
        return super.addEvent(movie)
    }
}

