import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BookingComponent } from './components/booking/booking.component';
import { ManagerComponent } from './components/manager/manager.component';
import { RoomComponent } from './components/room/room.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { CustomerRoomComponent } from './components/customer-room/customer-room.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    BookingComponent,
    ManagerComponent,
    RoomComponent,
    HotelComponent,
    CustomerRoomComponent,
    LoginComponent,
    HomeComponent,
    ReviewComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
