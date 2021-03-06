
import { DatePickerModule } from 'angular-io-datepicker';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationService } from './registration-form/registration.service';
import { HttpModule } from '@angular/http';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersListService } from './customers-list/customers-list.service';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    HomeFormComponent,
    NavBarComponent,
    LoginFormComponent,
    CustomersListComponent,
    
  ],
  imports: [
    BrowserModule,
    DatePickerModule, 
    ReactiveFormsModule, 
    HttpModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/home',pathMatch:"full"},
      {path:'home',component:HomeFormComponent},
      {path:'register',component:RegistrationFormComponent},
      {path:'login',component:LoginFormComponent},
      {path:'customers',component:CustomersListComponent}      

    ]),
   
  ],
  providers: [RegistrationService,CustomersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
