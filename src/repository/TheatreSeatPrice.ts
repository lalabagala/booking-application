import { SEAT_TYPE } from "../Interfaces/enums";
import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";
import { TheatreEntity } from "./TheatreRepository";

export class TheatreSeatPriceEntity implements IEntity {
    seat_type: SEAT_TYPE;
    id: number | null;
    price: number;
    theatre: TheatreEntity
    constructor(seat_type: SEAT_TYPE, price: number, theatre: TheatreEntity) {
        this.seat_type = seat_type;
        this.price = price;
        this.theatre = theatre
        this.id = null
    }
    getSerializedData() {
        return {
            "seat_type":this.seat_type,
            "price": this.price,
            "theatre": this.theatre.getSerializedData()
        }
    }
}

export class TheatrePriceRepo extends BaseRepository<TheatreSeatPriceEntity>{
    private static repoObj: TheatrePriceRepo;
    constructor() {
        super()
    }
    public getRepositoryInstance(): TheatrePriceRepo {
        if(TheatrePriceRepo.repoObj) {
            return TheatrePriceRepo.repoObj
        } else {
            TheatrePriceRepo.repoObj = new TheatrePriceRepo()
            return TheatrePriceRepo.repoObj
        }
    }
}