import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./components/authentication/signup/signup.component";
import {SigninComponent} from "./components/authentication/signin/signin.component";
import {ListingComponent} from "./components/listing/listing.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./components/core/core.module').then((m)=>m.CoreModule)

  },
  {path: '', redirectTo: '',pathMatch:'full'},
  //TODO GUARD НЕЛЬЗЯ ВОЙТИ signup И signin если уже зашёл в систему
  {path:'signup',component: SignupComponent},
  {path:'signin',component: SigninComponent},
  {
    path: 'new-listing', component : ListingComponent,
    loadChildren: ()=> import('./components/listing/listing.module').then((m)=>m.ListingModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
