import { StandupEntity } from "../repository/EventRepository";
import { IEntity } from "../repository/Interfaces/IEntity";
import { EventService } from "./Event";

export class StandupService extends EventService {
    addEvent(standupEntity: StandupEntity): IEntity {
        return super.addEvent(standupEntity);
    }
}