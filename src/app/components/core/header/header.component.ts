import {Component, OnInit} from '@angular/core';
import {faBell} from '@fortawesome/free-regular-svg-icons'
import {faGear,faRightFromBracket,faUser} from '@fortawesome/free-solid-svg-icons'
import {AuthService} from "../../../services/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showMenu=false;
  isLogged!:boolean;
  constructor(private authService:AuthService) {
  }

  logout(){
    this.authService.logout()
  }
  ngOnInit(): void {
    this.isLogged=this.authService.isLoggedIn()
  }



  protected readonly faBell = faBell;
  protected readonly faGear = faGear;
  protected readonly faRightFromBracket = faRightFromBracket;
  protected readonly faUser = faUser;
}
