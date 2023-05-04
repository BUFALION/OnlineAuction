import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {BodyComponent} from "./components/core/body/body.component";
import {SearchComponent} from "./components/core/search/search.component";
import {VehiclesComponent} from "./components/core/vehicles/vehicles.component";
import {VehicleDetailsComponent} from "./components/core/vehicle-details/vehicle-details.component";
import {SignupComponent} from "./components/authentication/signup/signup.component";

//TODO search/auctions
//TODO search/cars
const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'search', component: VehiclesComponent},
  {path:'search/details/:id',component:VehicleDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
