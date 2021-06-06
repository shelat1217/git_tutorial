import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigateComponent } from './navigate/navigate.component';
import {HttpClientModule} from "@angular/common/http";
import { DemoComponent } from './demo/demo.component';
import { PatelComponent } from './patel/patel.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    NavigateComponent,
    DemoComponent,
    PatelComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule,HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
