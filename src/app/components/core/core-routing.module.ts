import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "../authentication/signup/signup.component";
import {VehiclesComponent} from "./vehicles/vehicles.component";
import {VehicleDetailsComponent} from "./vehicle-details/vehicle-details.component";
import {SearchComponent} from "./search/search.component";
import {BodyComponent} from "./body/body.component";
import {ListingComponent} from "../listing/listing.component";

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      { path: 'search', component: VehiclesComponent },
      { path: 'search/details/:id', component: VehicleDetailsComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
