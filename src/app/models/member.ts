import { Booking } from "./booking";
import { User } from "./user";

export class Member {
    public booking: Booking;
    public allocatedCredits: number;
    public user: User;
    constructor () {}
}
