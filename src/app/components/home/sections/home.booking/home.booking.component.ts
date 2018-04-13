import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../../../../services/booking.service';
import { Booking } from '../../../../models/booking';

@Component({
  selector: 'home-booking',
  templateUrl: './home.booking.component.html',
  styleUrls: ['./home.booking.component.css']
})
export class HomeBookingComponent implements OnInit {
  bookings: Booking[] = [
    {
      "bookingId": "C0001",
      "startDateTime": new Date('2018-06-30T06:00:00'),
      "endDateTime": new Date('2018-06-30T12:00:00'),
      "creditsUsed": 36,
      "boatId": "B07",
      "userId": "345223c8-52a2-4f40-9301-8d09f5395a9b",
      "itinerary": "Day 1: Sail",
      "memberList": [],
      "nonMemberList": []
  },
  {
      "bookingId": "C0002",
      "startDateTime": new Date("2018-07-01T20:00:00"),
      "endDateTime": new Date("2018-07-02T06:00:00"),
      "creditsUsed": 60,
      "boatId": "B07",
      "itinerary": "Day 2: Sail",
      "userId": "345223c8-52a2-4f40-9301-8d09f5395a9b",
      "memberList": [],
      "nonMemberList": []
  },
  {
      "bookingId": "C0003",
      "startDateTime": new Date("2018-07-30T01:00:00"),
      "endDateTime": new Date("2018-07-30T18:00:00"),
      "creditsUsed": 102,
      "boatId": "B07",
      "itinerary": "Day 3: Sail",
      "userId": "345223c8-52a2-4f40-9301-8d09f5395a9b",
      "memberList": [],
      "nonMemberList": []
  }];
  booking: Booking[];
  @Input() userId: string;

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    //this.getBookings();
    
  }

  getBookings(): void {
    this.bookingService.getBookingsByUserId(this.userId)
      .then(bookings => {
        this.bookings = bookings;
      });
  }

  editBooking(booking: Booking): void {
    this.bookingService.putBooking(booking)
      .then(() => this.getBookings());
  }

  deleteBooking(bookingId: string): void {
    this.bookingService.deleteBooking(bookingId)
  }

}
