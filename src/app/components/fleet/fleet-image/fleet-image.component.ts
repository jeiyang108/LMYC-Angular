import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fleet-image',
  templateUrl: './fleet-image.component.html',
  styleUrls: ['./fleet-image.component.css']
})
export class FleetImageComponent {
  @Input() photo: any;
  @Output() close = new EventEmitter<void>();

  cancel() {
    this.close.emit();
  }
}
