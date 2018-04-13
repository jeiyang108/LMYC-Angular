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
    booking: Booking;
    @Input() bookingId: string;
    boat: Boat;

    constructor(private bookingService: BookingService) {
    }

    ngOnInit() {
        this.getBooking(this.bookingId);
    }

    getBooking(bookingId: string): void {
        console.log("reservation-getBooking: " + bookingId);
        this.bookingService.getBookingByBookingId(bookingId)
            .then(booking => {
             this.booking = booking;
            });
    }

    editBooking(bookingId: string): void {
        console.log("reservation-editBooking: " + bookingId);
        //pass to edit page
    }

}
