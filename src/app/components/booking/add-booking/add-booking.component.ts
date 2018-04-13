import { Component, OnInit, Injectable } from '@angular/core';
import { NgbModal, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../../../models/booking';
import { Boat } from '../../../models/boat';
import { Member } from '../../../models/member';
import { NonMember } from '../../../models/non-member';
import { BoatService } from '../../../services/boat.service';
import { BookingService } from '../../../services/booking.service';
import { User } from '../../../models/user';
import { ListUserServiceService } from '../../../services/list-user-service.service';

@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
  fromModel(date: Date) : NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}: null;
  }
  toModel(date: NgbDateStruct): Date {
    return date? new Date(date.year, date.month - 1, date.day) : null;
  }
}

@Component({
  selector: 'add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}, BookingService, ListUserServiceService]
})
export class AddBookingComponent implements OnInit {

  reservation: Booking;
  boatList: Boat[];
  selectedStartDate: Date;
  selectedStartTime: string;
  selectedEndDate: Date;
  selectedEndTime: string;
  selectedMembers: Member[] = [];
  selectedMember: Member = new Member(); // selected value from modal
  selectedEditMember: Member = new Member();
  currentMembersIndex: number;
  selectedNonMembers: NonMember[] = [];
  selectedEditNonMember: NonMember = new NonMember();
  selectedNonMember: NonMember = new NonMember(); // set value from modal
  requiredCredits: number = 0;
  dummyDataStartDate: Date = new Date(2018, 4, 12, 10, 0);
  dummyDataEndDate: Date = new Date(2018, 4, 12, 13, 0);
  result: number;
  memberList: Member[];

  // reference for modal
  modalRef: any;

  constructor(private modalService: NgbModal, private boatService: BoatService, private bookingService: BookingService, private lus:ListUserServiceService) { }

  ngOnInit() {
    this.boatService.getBoats()
      .then(data => {
        this.boatList = data;
      });
    this.reservation = new Booking();
    this.lus.getUsers()
      .subscribe( data => this.memberList = data);
    //this.reservation.Id = "0";
    this.reservation.boatId = this.boatService.selectedBoatId; // sets the default for the drop down
    this.reservation.startDateTime = new Date();
    this.reservation.endDateTime = new Date();
    this.result = this.dummyDataEndDate.getDate() - this.dummyDataStartDate.getDate();
    console.log(this.result);
  }

  getStartDate(reservationBoatId: string) {

  }
  open(modalName) {
    this.modalRef = this.modalService.open(modalName);
  }
  close() {
    this.modalRef.close();
  }
  addMember() {
    this.selectedMembers.push(this.selectedMember);
    this.selectedMember = new Member();
    this.close();
  }
  addNonMember() {
    this.selectedNonMembers.push(this.selectedNonMember);
    this.selectedNonMember = new NonMember();
    this.close();
  }
  addBooking() {
    this.reservation.members = this.selectedMembers;
    this.reservation.nonMembers = this.selectedNonMembers;
    this.reservation.startDateTime = new Date(this.reservation.startDateTime.getFullYear(),
                    this.reservation.startDateTime.getMonth(),
                    this.reservation.startDateTime.getDate(),
                    +this.selectedStartTime.substring(0,2) - 7,
                    +this.selectedStartTime.substring(3,5));
    this.reservation.endDateTime = new Date(this.reservation.endDateTime.getFullYear(),
                    this.reservation.endDateTime.getMonth(),
                    this.reservation.endDateTime.getDate(),
                    +this.selectedEndTime.substring(0,2) - 7,
                    +this.selectedEndTime.substring(3,5));
    console.log(this.reservation);
    this.bookingService.postBooking(this.reservation);
  }
  editRow(index, modalName) {
    this.selectedEditMember = this.selectedMembers[index];
    this.currentMembersIndex = index;
    this.open(modalName);
  }
  saveEdit() {
    this.selectedMembers[this.currentMembersIndex] = this.selectedEditMember;
    this.currentMembersIndex = null;
    this.close();
  }

  calculateCreditHours() {
    this.dummyDataStartDate = new Date("April 13, 2018 10:00:00");
    this.dummyDataEndDate = new Date("April 15, 2018 3:00:00");
    var diffInTotalHours = (this.dummyDataEndDate.getMilliseconds() - this.dummyDataStartDate.getMilliseconds()) / 1000 / 60 / 60
    
    var h = this.dummyDataStartDate.getHours();

    var remaininghoursTillNextDay = 24 - h;
    var remaininghours = diffInTotalHours - remaininghoursTillNextDay;

    if (remaininghours > 24) {
      var lastDayHours = remaininghours - 24;
      var anything = [remaininghoursTillNextDay, 24, lastDayHours];
      var everything = [];
    
      for (var i = this.dummyDataStartDate.getDay(), j = 0; j < 3; j++, i++) {
        
        if (i != 0 && i != 6) {
          if(remaininghoursTillNextDay > 10) {
            everything[j] = 10*6; //TODO
          } else {
            everything[j] = anything[j]*6;
          }
        } else {
          if (remaininghoursTillNextDay > 15) {
            everything[j] = 15*6;
          } else {
            everything[j] = anything[j]*6;
          }
        }
      }
      

    }
  }

  


// Dummy Data
  // memberList: Member[] = [
  //   {
  //     id: "1",
  //     name: "Jack Jones",
  //     allocatedCredits: 0
  //   },
  //   {
  //     id: "2",
  //     name: "May Smith",
  //     allocatedCredits: 0
  //   },
  //   {
  //     id: "3",
  //     name: "Alex Martins",
  //     allocatedCredits: 0
  //   },
  //   {
  //     id: "4",
  //     name: "Bill Wong",
  //     allocatedCredits: 0
  //   },
  //   {
  //     id: "5",
  //     name: "Sam Sung",
  //     allocatedCredits: 0
  //   },
  //   {
  //     id: "6",
  //     name: "Timothy Park",
  //     allocatedCredits: 0
  //   },
  //   {
  //     id: "7",
  //     name: "Max Whyte",
  //     allocatedCredits: 0
  //   },
  // ];

  // boatList: Boat[] = [
  //   {
  //     BoatId: "1",
  //     Name: "The Earl of New England",
  //     CreditsPerHour: 4,
  //     Status: "Good",
  //     Photo: null,
  //     Description: "The fastest boat around",
  //     Length: 2,
  //     Make: "Sailboat",
  //     Year: 2018
  //   },
  //   {
  //     BoatId: "2",
  //     Name: "Titanic",
  //     CreditsPerHour: 6,
  //     Status: "Good",
  //     Photo: null,
  //     Description: "The best of the best",
  //     Length: 200,
  //     Make: "Cruise",
  //     Year: 1992
  //   },
  //   {
  //     BoatId: "3",
  //     Name: "Queen of Vancouver",
  //     CreditsPerHour: 4,
  //     Status: "Good",
  //     Photo: null,
  //     Description: "The best in the west",
  //     Length: 20,
  //     Make: "Cruise",
  //     Year: 2016
  //   }
  // ];

  timeList: string[] = [ 
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30"
  ];
}
