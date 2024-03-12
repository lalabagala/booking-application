import { ITheatre } from "../Interfaces/Itheatre";
import { IEntity } from "../repository/Interfaces/IEntity";
import { LocationEntity } from "../repository/ServiceLocationRepository";
import { TheatreEntity, TheatreRepository } from "../repository/TheatreRepository";

export class TheatreService implements ITheatre {
    private theatreRepo: TheatreRepository;
    constructor() {
        this.theatreRepo = new TheatreRepository().getRepositoryInstance();
    }
    getTheatresForLocation(location: LocationEntity): TheatreEntity[] {
        return this.theatreRepo.getTheatreForLocation(location.location);
    }

    addTheatre(theatreEntity: TheatreEntity): IEntity {
       return this.theatreRepo.create(theatreEntity)
    }

    getTheatreById(theatre_id: number): TheatreEntity {
        let theatre = this.theatreRepo.findOne(theatre_id) as TheatreEntity;
        return theatre
    }
}