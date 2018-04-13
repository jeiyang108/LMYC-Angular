import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../models/booking';
import { Boat } from '../../../models/boat';

@Component({
    selector: 'reservation-detail',
    templateUrl: './reservation-detail.component.html',
    styleUrls: ['./reservation-detail.component.css'],
    providers: [ BookingService ],
})
export class ReservationDetailComponent implements OnInit {
    booking: Booking = {
        "bookingId": "C0001",
        "startDateTime": new Date('2018-06-30T06:00:00'),
        "endDateTime": new Date('2018-06-30T12:00:00'),
        "creditsUsed": 36,
        "boatId": "B07",
        "userId": "345223c8-52a2-4f40-9301-8d09f5395a9b",
        "itinerary": "Day 1: Sail",
        "memberList": [],
        "nonMemberList": []
    };
    @Input() bookingId: string;
    boat: Boat;

    constructor(private bookingService: BookingService) {
    }

    ngOnInit() {
        //this.getBooking(this.bookingId);
    }

    getBooking(bookingId: string): void {
        console.log("reservation-getBooking: " + bookingId);
        // this.bookingService.getBookingByBookingId(bookingId)
        //     .then(bookings => {
        //      this.bookings = bookings;
        //     });
        // then get boat by boat id
    }

    editBooking(bookingId: string): void {
        console.log("reservation-editBooking: " + bookingId);
        //pass to edit page
    }

}
