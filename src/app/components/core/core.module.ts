import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import {AppModule} from "../../app.module";
import { FilterComponent } from './filter/filter.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,

  ]
})
export class CoreModule { }
