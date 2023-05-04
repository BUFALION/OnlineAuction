import {Component, Input} from '@angular/core';
import{faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {ICar} from "../../../models/car";
@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  @Input() car!:ICar

  protected readonly faEllipsis = faEllipsis;
}
