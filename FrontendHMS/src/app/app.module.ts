import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickUpComponent } from './components/pick-up/pick-up.component';
import { SearchRoomComponent } from './components/search-room/search-room.component';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { ManagerInfoComponent } from './components/manager-info/manager-info.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { NewRoomComponent } from './components/new-room/new-room.component';
import { NewDriverComponent } from './components/new-driver/new-driver.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReceptionComponent } from './components/reception/reception.component';
import { FormsModule } from '@angular/forms';
import  {HttpClientModule} from '@angular/common/http';
import { UpdateCheckComponent } from './components/update-check/update-check.component';




@NgModule({
  declarations: [
    AppComponent,
    PickUpComponent,
    SearchRoomComponent,
    UpdateRoomComponent,
    CheckOutComponent,
    CheckInComponent,
    CustomerInfoComponent,
    ManagerInfoComponent,
    NewCustomerComponent,
    NewRoomComponent,
    NewDriverComponent,
    NewEmployeeComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ReceptionComponent,
    UpdateCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
