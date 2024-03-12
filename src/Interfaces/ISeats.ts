import { AudiEntity } from "../repository/Audi";
import { AudiRowEntity } from "../repository/AudiRows";
import { IEntity } from "../repository/Interfaces/IEntity"
import { SeatsEntity } from "../repository/Seats"

export interface ISeat {
    addAudiRow(row_entity: AudiRowEntity): AudiRowEntity;
    addSeat(seat: SeatsEntity): IEntity;
    getSeatsInAudi(audi: AudiEntity): SeatsEntity[]
}