import { IAudi } from "../Interfaces/Iaudi";
import { ITheatre } from "../Interfaces/Itheatre";
import { AudiEntity, AudiRepository } from "../repository/Audi";
import { AudiRowEntity, AudiRowRepository } from "../repository/AudiRows";
import { IEntity } from "../repository/Interfaces/IEntity";
import { TheatreEntity } from "../repository/TheatreRepository";

export class AudiService implements IAudi {
    audiRepo: AudiRepository;
    audi_row_repo: AudiRowRepository
    constructor(){
        this.audiRepo = new AudiRepository().getRepositoryInstance();
        this.audi_row_repo = new AudiRowRepository().getRepositoryInstance();
    }
    
    addAudi(audi_entity: AudiEntity): IEntity {
        return this.audiRepo.create(audi_entity);
        
    }

    getAudisForTheatre(theatre: TheatreEntity): AudiEntity[] {
        return this.audiRepo.getAudiForTheatre(theatre);
    }

    getAudiFromId(audi_id: number): AudiEntity {
        return this.audiRepo.findOne(audi_id) as AudiEntity
    }

    addAudiRow(audi_row: AudiRowEntity): AudiRowEntity {
        return this.audi_row_repo.create(audi_row) as AudiRowEntity;
    }

    getAudiRows(audi_id: number) {
        this.audi_row_repo.getRowsForAudi(audi_id);
    }
}