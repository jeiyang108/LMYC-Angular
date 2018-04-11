import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FleetComponent } from './components/about/fleet/fleet.component';
import { HistoryComponent } from './components/about/history/history.component';
import { BookingComponent } from './components/booking/booking.component';
import { EventsComponent } from './components/home/sections/events/events.component';
import { FaqComponent } from './components/home/sections/faq/faq.component';
import { FooterComponent } from './components/home/sections/footer/footer.component';
import { BoatsimagesComponent } from './components/home/sections/boatsimages/boatsimages.component';
import { MembershipComponent } from './components/membership/membership.component';
import { MyAccountComponent } from './components/myaccount/myaccount.component';
import { ReservationsComponent } from './components/myaccount/reservations/reservations.component';
import { RulesandregulationsComponent } from './components/membership/sections/rulesandregulations/rulesandregulations.component';
import { ModalSignupComponent } from './components/membership/sections/modal-signup/modal-signup.component';
import { EmergencyContactComponent } from './components/myaccount/sections/emergencycontact/emergencycontact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    FleetComponent,
    HistoryComponent,
    BookingComponent,
    EventsComponent,
    FaqComponent,
    FooterComponent,
    BoatsimagesComponent,
    MembershipComponent,
    MyAccountComponent,
    ReservationsComponent,
    RulesandregulationsComponent,
    ModalSignupComponent,
    EmergencyContactComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'fleet', component:FleetComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'home', component: HomeComponent },
      { path: 'membership', component: MembershipComponent },
      { path: 'my-account', component: MyAccountComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
