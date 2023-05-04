import { Component } from '@angular/core';
import {faSliders} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  protected readonly faSliders = faSliders;

}
