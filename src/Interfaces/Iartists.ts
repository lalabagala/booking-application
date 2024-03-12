import { ArtistsEntity } from "../repository/Artists";
import { IEntity } from "../repository/Interfaces/IEntity";

export interface IArtists {
    addArtists(artist: ArtistsEntity): IEntity;
    getAllArtists(): IEntity[]
}