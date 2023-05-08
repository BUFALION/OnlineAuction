import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListingComponent} from "./listing.component";
import { StepOneComponent } from './steps/step-one/step-one.component';
import {CoreModule} from "../core/core.module";
import { StepTwoComponent } from './steps/step-two/step-two.component';
import { StepThreeComponent } from './steps/step-three/step-three.component';
import { StepFiveComponent } from './steps/step-five/step-five.component';
import { StepSixComponent } from './steps/step-six/step-six.component';


const routes: Routes = [
  {
    path:'',
    component:ListingComponent,
  }
];
@NgModule({
  declarations: [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFiveComponent,
    StepSixComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreModule
  ]
})

export class ListingModule { }
