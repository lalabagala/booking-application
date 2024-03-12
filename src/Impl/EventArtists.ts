import { IEventArtists } from "../Interfaces/IEventArtists";
import { ArtistEventMap, EventAtristsRepository } from "../repository/ArtistEventMap";
import { ArtistsEntity } from "../repository/Artists";
import { BaseEventEntity } from "../repository/EventRepository";
import { IEntity } from "../repository/Interfaces/IEntity";

export class EventArtistsService implements IEventArtists{
    eventArtistRepo: EventAtristsRepository;
    constructor() {
        this.eventArtistRepo = new EventAtristsRepository().getRepositoryInstance()
    }
    addEventArtists(eventArtist: ArtistEventMap): IEntity {
        return this.eventArtistRepo.create(eventArtist)
    }
    getArtistsForEvent(event: BaseEventEntity): ArtistsEntity[] {
        return this.eventArtistRepo.getArtistsForEvent(event);
    }
    getEventForArtist(artist: ArtistsEntity): BaseEventEntity[] {
        return this.eventArtistRepo.getEventForArtist(artist);
    }
    
}