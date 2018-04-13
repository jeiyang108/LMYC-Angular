import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking';
import { Router } from '@angular/router';

@Component({
    selector: 'reservation',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css'],
    providers: [ BookingService ],
})
export class ReservationComponent implements OnInit {
    // bookings: Booking[] = [
    // {
    //     "bookingId": "C0001",
    //     "startDateTime": new Date('2018-06-30T06:00:00'),
    //     "endDateTime": new Date('2018-06-30T12:00:00'),
    //     "creditsUsed": 36,
    //     "boatId": "B07",
    //     "userId": "345223c8-52a2-4f40-9301-8d09f5395a9b",
    //     "itinerary": "Day 1: Sail",
    //     "memberList": [],
    //     "nonMemberList": []
    // },
    // {
    //     "bookingId": "C0002",
    //     "startDateTime": new Date("2018-07-01T20:00:00"),
    //     "endDateTime": new Date("2018-07-02T06:00:00"),
    //     "creditsUsed": 60,
    //     "boatId": "B07",
    //     "itinerary": "Day 2: Sail",
    //     "userId": "345223c8-52a2-4f40-9301-8d09f5395a9b",
    //     "memberList": [],
    //     "nonMemberList": []
    // },
    // {
    //     "bookingId": "C0003",
    //     "startDateTime": new Date("2018-07-30T01:00:00"),
    //     "endDateTime": new Date("2018-07-30T18:00:00"),
    //     "creditsUsed": 102,
    //     "boatId": "B07",
    //     "itinerary": "Day 3: Sail",
    //     "userId": "345223c8-52a2-4f40-9301-8d09f5395a9b",
    //     "memberList": [],
    //     "nonMemberList": []
    // }];
    bookings: Booking[];
    booking: Booking;
    @Input() userName: string = "m1";

    constructor(
        private bookingService: BookingService,
        private router: Router
    )
    { }
    
    ngOnInit() {
        this.getBookings();
    }

    getBookings(): void {
    this.bookingService.getBookingsByUserId(this.userName)
        .then(bookings => {
        this.bookings = bookings;
        });
    }

    getBooking(bookingId: string): void {
        console.log("reservation-getBooking: " + bookingId);
        this.router.navigate(['/reservations', bookingId]);
    }

    editBooking(bookingId: string): void {
        console.log("reservation-editBooking: " + bookingId);
        //pass to edit page
    }

    deleteBooking(bookingId: string): void {
        console.log("reservation-deleteBooking: " + bookingId);
        this.bookingService.deleteBooking(bookingId)
            .then(() => {
                this.getBookings();
            });
    }

}
