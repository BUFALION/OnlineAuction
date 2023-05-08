import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { FilterComponent } from './filter/filter.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import {CoreRoutingModule} from "./core-routing.module";
import {BodyComponent} from "./body/body.component";
import {HeaderComponent} from "./header/header.component";
import {SearchComponent} from "./search/search.component";
import {SidebarSellComponent} from "./sidebar-sell/sidebar-sell.component";
import {SellerCardComponent} from "../seller-card/seller-card.component";
import {DetectFocusDirective} from "../../directives/detect-focus.directive";
import {NavigationComponent} from "./navigation/navigation.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { SellCardComponent } from './sell-card/sell-card.component';

@NgModule({
  declarations: [
    NavigationComponent,
    BodyComponent,
    HeaderComponent,
    SearchComponent,
    VehiclesComponent,
    FilterComponent,
    VehicleCardComponent,
    VehicleDetailsComponent,
    SidebarSellComponent,
    SellerCardComponent,
    DetectFocusDirective,
    SellCardComponent

  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    DetectFocusDirective

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule,
    RouterOutlet,

  ]
})
export class CoreModule { }
