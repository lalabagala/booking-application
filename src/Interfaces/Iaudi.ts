import { AudiEntity } from "../repository/Audi";
import { IEntity } from "../repository/Interfaces/IEntity";
import { TheatreEntity } from "../repository/TheatreRepository";

export interface IAudi {
    addAudi(audi: AudiEntity): IEntity;
    getAudisForTheatre(theatre: TheatreEntity): AudiEntity[];
}