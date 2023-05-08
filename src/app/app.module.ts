import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './components/authentication/signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "./components/core/core.module";
import { ToastComponent } from './components/helpers/toast/toast.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { ListingComponent } from './components/listing/listing.component';
import { ImageUploaderComponent } from './components/helpers/image-uploader/image-uploader.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ToastComponent,
    SigninComponent,
    ListingComponent,
    ImageUploaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterOutlet,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule
  ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
