import { Boat } from "./boat";
import { User } from "./user";
import { Member } from "./member";
import { NonMember } from "./non-member";

export class Booking {
    public bookingId: string;
    public startDateTime: Date;
    public endDateTime: Date;
    public creditsUsed: number;
    public boat: Boat;
    public user: User;
    public members: Member[];
    public nonMembers: NonMember[];
    constructor () {}
}
