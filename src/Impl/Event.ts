import { IEvent } from "../Interfaces/IEvent";
import { BaseEventEntity, EventRepository } from "../repository/EventRepository";
import { IEntity } from "../repository/Interfaces/IEntity";

export class EventService implements IEvent {
    eventRepo: EventRepository
    constructor() {
        this.eventRepo = new EventRepository().getRepositoryInstance();
    }
    addEvent(eventEntity: BaseEventEntity): IEntity {
        return this.eventRepo.create(eventEntity);
    }

    getEvent(event_id: number): IEntity | null {
       return this.eventRepo.findOne(event_id);
    }
}