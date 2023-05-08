import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css','../step-styles.css']
})
export class StepOneComponent {
  @Input() formGroup!:FormGroup

  options = [
    { value: 'Sedan'},
    { value: 'SUV'},
    { value: 'Coupe'},
    { value: 'Hatchback'},
    { value: 'Minivan'},
    { value: 'Cabriolet'},
  ];

}
