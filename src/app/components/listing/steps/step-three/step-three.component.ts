import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css','../step-styles.css']
})
export class StepThreeComponent {
  @Input() formGroup!:FormGroup
}
