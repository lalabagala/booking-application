import { IAudi } from "../Interfaces/Iaudi";
import { ITheatre } from "../Interfaces/Itheatre";
import { AudiEntity, AudiRepository } from "../repository/Audi";
import { IEntity } from "../repository/Interfaces/IEntity";
import { TheatreEntity } from "../repository/TheatreRepository";

export class AudiService implements IAudi {
    audiRepo: AudiRepository;
    constructor(){
        this.audiRepo = new AudiRepository().getRepositoryInstance()
    }
    
    addAudi(audi_entity: AudiEntity): IEntity {
        return this.audiRepo.create(audi_entity);
        
    }

    getAudisForTheatre(theatre: TheatreEntity): AudiEntity[] {
        return this.audiRepo.getAudiForTheatre(theatre);
    }
    
}