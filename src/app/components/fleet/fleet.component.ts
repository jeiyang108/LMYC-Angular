import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoatService } from '../../services/boat.service';
import { Boat } from '../../models/boat';

@Component({
  selector: 'fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {

  selected: Boat;
  boats: Boat[];
  showImage: Boolean = false;
  outputPhoto: any;

  constructor(
    private boatService: BoatService,
    private router: Router
  ) { }

  getBoats(): void {
    this.boatService.getBoats()
      .then(boats => {
        this.boats = boats;
      });
  }

  ngOnInit() {
    this.getBoats();
  }

  onBook(index: string) {
    // console.log(index);
    this.boatService.selectedBoatId = index;
    //this.bookingService.setSelectedBoat(this.boats[index]);
  }

  applyStatusStyle(status: string) {
    switch(status)
    {
      case 'Operational':
        return 'text-success';
      default:
        return 'text-danger';
    }
  }

  applyCardHeaderStyle(feet: number) {
    switch(feet)
    {
      /*case 25:
        return 'bg-warning';
      case 27:
        return 'bg-info';
      case 28:
        return 'bg-success';
      case 30:
        return 'bg-dark';*/
      default:
        return 'bg-dark';
    }
  }

  showImageModal(photoString: any) {
    this.showImage = true
    this.outputPhoto = photoString;
  }

  closeImageModal() {
    this.showImage = false;
  }
}
