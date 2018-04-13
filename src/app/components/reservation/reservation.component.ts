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
        // this.router.navigate(['/reservations', bookingId]);
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
