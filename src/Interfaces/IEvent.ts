import { BaseEventEntity } from "../repository/EventRepository"
import { IEntity } from "../repository/Interfaces/IEntity"

export interface IEvent {
    addEvent(baseEvent: BaseEventEntity): void
    getEvent(event_id: number): IEntity | null
}