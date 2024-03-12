import { AudiEntity } from "../repository/Audi";
import { IEntity } from "../repository/Interfaces/IEntity"
import { SeatsEntity } from "../repository/Seats"

export interface ISeat {
    addSeat(seat: SeatsEntity): IEntity;
    getSeatsInAudi(audi: AudiEntity): SeatsEntity[]
}