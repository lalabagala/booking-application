import { AudiEntity } from "./Audi";
import { IEntity } from "./Interfaces/IEntity";

export class AudiRowEntity implements IEntity{
    row_id: string;
    audi: AudiEntity;
    id: number;
    seat_count: number;
    constructor(row_id: string, audi: AudiEntity, seat_count: number) {
        this.row_id = row_id;
        this.audi = audi;
        this.seat_count = seat_count;
        this.id = 0;
    }
    getSerializedData() {
        return {
            "row_id": this.row_id,
            "seat_count": this.seat_count,
            "audi": this.audi.getSerializedData()
        }
    }

}