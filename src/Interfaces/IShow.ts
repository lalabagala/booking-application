import { ArtistsEntity } from "../repository/Artists";
import { IEntity } from "../repository/Interfaces/IEntity";
import { ShowEntity } from "../repository/Shows";
import { TheatreEntity } from "../repository/TheatreRepository";

export interface IShow {
    addShow(show: ShowEntity): IEntity;
    getShowsForTheatre(theatre: TheatreEntity): ShowEntity[];
    getShowsForDate(date: Date): ShowEntity[];
    getShowsForArtist(artist: ArtistsEntity): ShowEntity[];
    // observer pattern
    subscriber_list: ISubscriber[]
    publish_to_subscribers(): void
}