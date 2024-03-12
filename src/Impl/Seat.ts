import { ISeat } from "../Interfaces/ISeats";
import { AudiEntity } from "../repository/Audi";
import { AudiRowEntity, AudiRowRepository } from "../repository/AudiRows";
import { IEntity } from "../repository/Interfaces/IEntity";
import { SeatsEntity, SeatsRepository } from "../repository/Seats";

export class SeatService implements ISeat {
    seatRepo: SeatsRepository;
    audiRowRepo: AudiRowRepository;
    constructor() {
        this.seatRepo = new SeatsRepository()
        this.audiRowRepo = new AudiRowRepository()
    }
    addSeat(seat: SeatsEntity): IEntity {
        return this.seatRepo.create(seat);
    }
    getSeatsInAudi(audi: AudiEntity): SeatsEntity[] {
        return this.seatRepo.getSeatsInAudi(audi);
    }
    addAudiRow(row_entity: AudiRowEntity): AudiRowEntity {
        return this.audiRowRepo.create(row_entity) as AudiRowEntity
    }

    getAudiRows(audi_id: number): AudiRowEntity[] {
        return this.audiRowRepo.getRowsForAudi(audi_id)
    }
}