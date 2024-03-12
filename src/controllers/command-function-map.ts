import { CustomError } from "../utils/exceptions";
import { LocationController } from "./LocationController";
import { TheatreController } from "./TheatreController";

export class CommandFunctionMap {
    locationController: LocationController;
    theatreController: TheatreController;
    commandMap: any
    constructor() {
        this.locationController = new LocationController();
        this.theatreController = new TheatreController();
        this.commandMap = {}
        this.constructMap()
        console.log("command map ", this.commandMap);
    }

    constructMap() {
        this.commandMap["add-location"] = this.addLocation;
        this.commandMap['add-theatre'] = this.addTheatre
        this.commandMap['get-locations'] = this.locationController.getAllLocations
        this.commandMap['get-theatre-for-location'] = this.getTheatreForLocation
    }


    public addLocation(params: string) {
        console.log("add location params ", params);
        return this.locationController.addLocation(params[0])
    }

    public addTheatre(params: string[]) {
        if(params.length!=3) {
            this.throwInvalidInputError(3)
        } 
        return this.theatreController.addTheatre(params[0], parseInt(params[1]), params[2]);
    }

    public getTheatreForLocation(params: string[]) {
        return this.theatreController.getTheatresInLocation(parseInt(params[0]));
    }

    throwInvalidInputError(n: number) {
        throw new CustomError(`Invalid input expected ${n} args`)
    }
}

