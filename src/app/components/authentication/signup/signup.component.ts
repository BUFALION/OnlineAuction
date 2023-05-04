import { Component } from '@angular/core';
import {faArrowLeft,faXmark} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faXmark = faXmark;
}
