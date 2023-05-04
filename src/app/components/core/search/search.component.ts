import { Component } from '@angular/core';
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  protected readonly faMagnifyingGlass = faMagnifyingGlass;
}
