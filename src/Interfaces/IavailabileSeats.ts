import { ISeat } from "./ISeats";

export interface IAvailableSeats {
    seat: ISeat
    // populateAvailabileSeats(): void;
    // // this is abstract method . we need more concrete search methods
    getAvailabileSeats(): void;
}