import { IEntity } from "./Interfaces/IEntity";
import { SeatsEntity } from "./Seats";
import { ShowEntity } from "./Shows";
import { UserEntity } from "./UserRepository";

export class AvailableSeats implements IEntity{
    show: ShowEntity;
    seat: SeatsEntity;
    occupied_by: UserEntity;
    id: number | null;

    constructor(show: ShowEntity, seat: SeatsEntity, occupied_by: UserEntity) {
        this.show = show;
        this.seat = seat;
        this.occupied_by = occupied_by
        this.id = null
    }
    getSerializedData() {
        return {
            "show": this.show.getSerializedData(),
            "seat": this.seat.getSerializedData(),
            "occupied_by": this.occupied_by.getSerializedData()
        } 
    }
}