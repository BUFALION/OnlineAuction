import { Component } from '@angular/core';
import {faCar} from '@fortawesome/free-solid-svg-icons'
import {navbarData} from "./nav-data";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navData=navbarData;
  protected readonly faCar = faCar;
}
