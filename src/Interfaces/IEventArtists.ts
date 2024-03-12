import { ArtistEventMap } from "../repository/ArtistEventMap";
import { ArtistsEntity } from "../repository/Artists";
import { BaseEventEntity } from "../repository/EventRepository";
import { IEntity } from "../repository/Interfaces/IEntity";

export interface IEventArtists {
    addEventArtists(eventArtist: ArtistEventMap): IEntity;
    getArtistsForEvent(event: BaseEventEntity): ArtistsEntity[];
    getEventForArtist(artist: ArtistsEntity): BaseEventEntity[];
}