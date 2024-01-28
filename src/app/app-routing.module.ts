import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { BookingComponent } from './components/booking/booking.component';
import { ManagerComponent } from './components/manager/manager.component';
import { RoomComponent } from './components/room/room.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/review/review.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'room', component: RoomComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'home', component: HomeComponent },
  { path: 'review', component: ReviewComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
