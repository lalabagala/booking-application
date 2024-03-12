import { IArtists } from "../Interfaces/Iartists";
import { ArtistsEntity, ArtistsRepository } from "../repository/Artists";
import { IEntity } from "../repository/Interfaces/IEntity";

export class ArtistsService implements IArtists{
    artistRepo: ArtistsRepository;
    constructor() {
        this.artistRepo = new ArtistsRepository().getRepositoryInstance()
    }
    addArtists(artist: ArtistsEntity): IEntity {
        return this.artistRepo.create(artist)
    }
    getAllArtists(): IEntity[] {
        return this.artistRepo.findAll()
    }
}