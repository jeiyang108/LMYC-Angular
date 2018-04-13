import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import {
  CalendarEvent,
  CalendarMonthViewDay,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
const colors: any = {
  red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
  },
  blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
  },
  yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
  }
};
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent implements OnInit {
@ViewChild('modalContent') modalContent: TemplateRef<any>;

    modalRef: any;
  constructor(private modalService: NgbModal, private bookingService: BookingService) { }

  ngOnInit() {
  }

  viewDate: Date = new Date();

  view: string = 'month';

  // class for displaying modal information
  modalData: {
      action: string;
      event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: ' &nbsp;Edit&nbsp;',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
      {
          start: new Date("2018-04-11T07:00:00.000Z"),
          end: addDays(new Date(), 1),
          title: 'A 3 day event',
          color: colors.blue,
          actions: this.actions
      },
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        color: colors.red,
        actions: this.actions
      },
  ];

  activeDayIsOpen: boolean = true;

  refresh: Subject<any> = new Subject();

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
          if (
              (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0
          ) {
              this.activeDayIsOpen = false;
          } else {
              this.activeDayIsOpen = true;
              this.viewDate = date;
          }
      }
  }

  // For modal

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modalService.open(this.modalContent, { size: 'lg' });
  }
  // Requires modalRef to know what to close.
  open(content) {
    this.modalRef = this.modalService.open(content);
  }

  close() {
    this.modalRef.close();
  }

}
