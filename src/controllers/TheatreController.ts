import { AudiService } from "../Impl/Audi";
import { LocationService } from "../Impl/Location";
import { SeatService } from "../Impl/Seat";
import { TheatreService } from "../Impl/Theatre";
import { AudiEntity } from "../repository/Audi";
import { AudiRowEntity } from "../repository/AudiRows";
import { TheatreEntity } from "../repository/TheatreRepository";

export class TheatreController {
    thretreService: TheatreService;
    audiService: AudiService;
    seatService: SeatService;
    locationService: LocationService
    constructor() {
        this.thretreService = new TheatreService();
        this.audiService = new AudiService();
        this.seatService = new SeatService()
        this.locationService = new LocationService()
    }
    public addTheatre(theatre_name: string,location_id: number, address: string) {
        let location = this.locationService.getServiceLocation(location_id);
        if(location) {
            let theatreEntity = new TheatreEntity(theatre_name, location, address)
            console.log(this.thretreService.addTheatre(theatreEntity));
        } else {
            // raise exception
        }
    }
    public getTheatresInLocation(location_id: number): TheatreEntity[] {
        let location = this.locationService.getServiceLocation(location_id);
        if(location) return this.thretreService.getTheatresForLocation(location)
        return []
    }

    public addAudiInTheatre(theatre_id: number, audi_title: string, total_seats: number) {
        let theatre: TheatreEntity = this.thretreService.getTheatreById(theatre_id)
        let newAudi = new AudiEntity(theatre, audi_title, total_seats);
        console.log(this.audiService.addAudi(newAudi));
    }
    public addAudiRow(row_id: string, audi_id: number, seat_count: number) {
        let audi = this.audiService.getAudiFromId(audi_id);
        let audiRow = new AudiRowEntity(row_id, audi, seat_count);
        
    }

    getAudiRows() {

    }
    addSeatesInAudi(audi_id: number ) {
    }
}