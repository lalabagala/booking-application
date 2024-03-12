import { IEventArtists } from "../Interfaces/IEventArtists";
import { IShow } from "../Interfaces/IShow";
import { IAudi } from "../Interfaces/Iaudi";
import { ArtistsEntity } from "../repository/Artists";
import { IEntity } from "../repository/Interfaces/IEntity";
import { ShowEntity, ShowRepository } from "../repository/Shows";
import { TheatreEntity } from "../repository/TheatreRepository";
import { AudiService } from "./Audi";
import { EventArtistsService } from "./EventArtists";


export class ShowService implements IShow {
    subscriber_list: ISubscriber[];
    show_repo: ShowRepository;
    audiService: IAudi;
    eventArtistService: IEventArtists
    constructor(audiService: IAudi, eventArtistService: IEventArtists) {
        this.subscriber_list = []
        this.show_repo = new ShowRepository().getRepositoryInstance()
        this.audiService = audiService;
        this.eventArtistService = eventArtistService;
    }
    addShow(show: ShowEntity): IEntity {
        return this.show_repo.create(show);
    }
    getShowsForTheatre(theatre: TheatreEntity): ShowEntity[] {
        let audis = this.audiService.getAudisForTheatre(theatre)
        return this.show_repo.getShowForAudis(audis);

    }
    getShowsForDate(date: Date): ShowEntity[] {
        return this.show_repo.getShowsForDate(date);
    }
    getShowsForArtist(artist: ArtistsEntity): ShowEntity[] {
        let events = this.eventArtistService.getEventForArtist(artist);
        return this.show_repo.getShowsForEvents(events)
    }
    
    publish_to_subscribers(): void {
        throw new Error("Method not implemented.");
    }
    
}