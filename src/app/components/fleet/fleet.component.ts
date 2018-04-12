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

  constructor(
    private boatService: BoatService,
    private router: Router
  ) { }

  // onSelect(boat: Boat): void {
  //   this.selected = boat;
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selected.BoatId]);
  // }

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
    console.log(index);
    //this.bookingService.setSelectedBoat(this.boats[index]);
  }

  applyStatusStyle(status: string) {
    switch(status)
    {
      case 'Out-of Service':
        return '.text-dangerous';
      default:
        return '.text-success';
    }
  }

  applyCardHeaderStyle(feet: number) {
    switch(feet)
    {
      case 25:
        return 'bg-warning';
      case 27:
        return 'bg-success';
      case 28:
        return 'bg-info';
      case 30:
        return 'bg-primary';
      default:
        return;
    }
  }
}
