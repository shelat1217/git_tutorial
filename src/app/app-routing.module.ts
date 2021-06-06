import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
//import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigateComponent } from './navigate/navigate.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes=[
 // {path:"", pathMatch:"full" redirectTo:""}, 
 {path:"navigate", component:NavigateComponent}, 
{ path:"login", component:LoginComponent},
{path:"logout", component:LogoutComponent},
{path:"**", component:NotFoundComponent},

];


@NgModule({

  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 

})
export class AppRoutingModule { }
