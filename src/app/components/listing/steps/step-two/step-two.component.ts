import {Component, Input} from '@angular/core';
import { FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css','../step-styles.css']
})
export class StepTwoComponent {
  @Input() formGroup!:FormGroup
  constructor() {}


}
