import { Member } from './member';
import { NonMember } from './non-member';

export class Booking {
  bookingId: string;
  startDateTime: Date;
  endDateTime: Date;
  creditsUsed: number;
  boatId: string;
  userId: string;
  itinerary: string;
  members: Member[];
  nonMembers: NonMember[];
  constructor() { }
}
