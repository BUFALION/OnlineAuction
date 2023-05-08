import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.css','../step-styles.css']
})
export class StepFiveComponent {
  @Input() formGroup!:FormGroup
}
