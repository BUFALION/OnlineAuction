import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/core/navigation/navigation.component';
import { BodyComponent } from './components/core/body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/core/header/header.component';
import { SearchComponent } from './components/core/search/search.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {VehiclesComponent} from "./components/core/vehicles/vehicles.component";
import {CoreModule} from "./components/core/core.module";
import {FilterComponent} from "./components/core/filter/filter.component";
import {VehicleCardComponent} from "./components/core/vehicle-card/vehicle-card.component";
import {NgOptimizedImage} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {VehicleDetailsComponent} from "./components/core/vehicle-details/vehicle-details.component";
import { SidebarSellComponent } from './components/core/sidebar-sell/sidebar-sell.component';
import { SellerCardComponent } from './components/seller-card/seller-card.component';
import { SignupComponent } from './components/authentication/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterOutlet,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule
  ],
    providers: [],
    exports: [
        SearchComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
