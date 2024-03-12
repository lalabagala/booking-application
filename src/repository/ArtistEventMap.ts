import { ArtistsEntity } from "./Artists";
import { BaseRepository } from "./BaseRepository";
import { BaseEventEntity } from "./EventRepository";
import { IEntity } from "./Interfaces/IEntity";

export class ArtistEventMap implements IEntity {
    artist: ArtistsEntity;
    event: BaseEventEntity;
    id: number | null;
    constructor(artist: ArtistsEntity, event: BaseEventEntity) {
        this.artist = artist;
        this.event = event
        this.id = null
    }
    getSerializedData() {
        return {
            "artist": this.artist.getSerializedData(),
            "event": this.event.getSerializedData()
        }
    }
}

export class EventAtristsRepository extends BaseRepository<ArtistEventMap> {
    private static repoObj: EventAtristsRepository;
    protected entity: ArtistEventMap[]
    constructor() {
        super()
        this.entity = []
    }

    public getRepositoryInstance(): EventAtristsRepository {
        if(EventAtristsRepository.repoObj) {
            return EventAtristsRepository.repoObj
        } else {
            EventAtristsRepository.repoObj = new EventAtristsRepository()
            return EventAtristsRepository.repoObj
        }
    }

    public getArtistsForEvent(event: BaseEventEntity): ArtistsEntity[] {
        let artists = this.entity.filter(el=> 
            el.event.id == el.id).map(el=>el.artist);
        return artists
    }

    public getEventForArtist(artist: ArtistsEntity): BaseEventEntity[] {
        let event = this.entity.filter(el=> 
            el.artist.id == artist.id).map(el=>el.event);
        return event
    }
}
