import { ISeat } from "../Interfaces/ISeats";
import { AudiEntity } from "../repository/Audi";
import { IEntity } from "../repository/Interfaces/IEntity";
import { SeatsEntity, SeatsRepository } from "../repository/Seats";

export class SeatService implements ISeat {
    seatRepo: SeatsRepository;
    constructor() {
        this.seatRepo = new SeatsRepository()
    }
    addSeat(seat: SeatsEntity): IEntity {
        return this.seatRepo.create(seat);
    }
    getSeatsInAudi(audi: AudiEntity): SeatsEntity[] {
        return this.seatRepo.getSeatsInAudi(audi);
    }
    
}