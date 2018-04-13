import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookingService]
})
export class BookingComponent implements OnInit {

  public bookings: Array<Booking> = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getBookings()
      .then(data => {
        this.bookings = data;
        console.log(this.bookings);
      })
      .catch(data => {
        alert("Error getting reservations: " + data);
      });
  }
}
