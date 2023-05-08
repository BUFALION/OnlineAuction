import { Component } from '@angular/core';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-sell-card',
  templateUrl: './sell-card.component.html',
  styleUrls: ['./sell-card.component.css']
})
export class SellCardComponent {

  protected readonly faCartPlus = faCartPlus;
}
