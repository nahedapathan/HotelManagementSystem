import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionComponent } from './components/reception/reception.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { SearchRoomComponent } from './components/search-room/search-room.component';
import { NewRoomComponent } from './components/new-room/new-room.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { NewDriverComponent } from './components/new-driver/new-driver.component';
import { PickUpComponent } from './components/pick-up/pick-up.component';
import { ManagerInfoComponent } from './components/manager-info/manager-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateCheckComponent } from './components/update-check/update-check.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'reception' ,component:ReceptionComponent},
  {path:'new-customer' , component:NewCustomerComponent},
  {path:'customer-info',component:CustomerInfoComponent},
  {path:'update-room',component:UpdateRoomComponent},
  {path:'search-room',component:SearchRoomComponent},
  {path:'new-room',component:NewRoomComponent},
  {path:'check-in',component:CheckInComponent},
  {path:'check-out',component:CheckOutComponent},
  {path:'update-check',component:UpdateCheckComponent},
  {path:'new-employee',component:NewEmployeeComponent},
  {path:'new-driver',component:NewDriverComponent},
  {path:'pick-up',component:PickUpComponent},
  {path:'manager-info',component:ManagerInfoComponent},
  
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
