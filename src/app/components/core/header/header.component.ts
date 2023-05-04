import { Component } from '@angular/core';
import {faBell} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu=false;



  protected readonly faBell = faBell;
}
