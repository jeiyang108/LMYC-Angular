import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyAccountComponent } from './components/myaccount/myaccount.component';
import { ReservationsComponent } from './components/myaccount/reservations/reservations.component';
import { HomeComponent } from './components/home/home.component';
import { HomeAboutComponent } from './components/home/sections/home.about/home.about.component';
import { HomeBookingComponent } from './components/home/sections/home.booking/home.booking.component';
import { HomeEventsComponent } from './components/home/sections/home.events/home.events.component';
import { HomeBoatImagesComponent } from './components/home/sections/home.boatimages/home.boatimages.component';
import { MyAccountEmergencyContactsComponent } from './components/myaccount/sections/myaccount.emergencycontacts/myaccount.emergencycontacts.component';
import { MembershipRulesAndRegulationsComponent } from './components/membership/sections/membership.rulesandregulations/membership.rulesandregulations.component';
import { FaqComponent } from './components/faq/faq.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { ContactUsComponent } from './components/contactus/contactus.component';
import { ReportService } from './services/report.service';
import { HttpClientModule } from '@angular/common/http';
import { FleetImageComponent } from './components/fleet/fleet-image/fleet-image.component';
import { ReportComponent } from './components/myaccount/sections/myaccount.report/myaccount.report.component';
import { MembersComponent } from './components/members/members.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DocumentComponent } from './components/document/document.component';

import { MembershipComponent } from './components/membership/membership.component';

import { ErrorInterceptor } from './http-interceptors/error-interceptor';

import { BoatService } from './services/boat.service';
import { AccountService } from './services/account.service';
import { BookingService } from './services/booking.service';
import { AddBookingComponent } from './components/booking/add-booking/add-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    FleetComponent,
    BookingComponent,
    FooterComponent,
    MembershipComponent,
    MembershipRulesAndRegulationsComponent,
    MyAccountComponent,
    MyAccountEmergencyContactsComponent,
    ReservationsComponent,
    HomeAboutComponent,
    HomeBookingComponent,
    HomeEventsComponent,
    HomeBoatImagesComponent,
    FaqComponent,
    VolunteerComponent,
    ContactUsComponent,
    ReportComponent,
    FleetImageComponent,
    ReportComponent,
    MembersComponent,
    RegisterComponent,
    DocumentComponent,
    AddBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(), // for angular calendar
    NgbModule.forRoot(), // for angular boostrap
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'fleet', component: FleetComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'members', component: MembersComponent },
      { path: 'home', component: HomeComponent },
      { path: 'membership', component: MembershipComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: 'about', component: AboutComponent},
      { path: 'faq', component: FaqComponent },
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'report', component: ReportComponent },
      { path: 'documents', component: DocumentComponent },
      { path: 'booking/create', component: AddBookingComponent }
    ])
  ],
  providers: [
    BoatService,
    AccountService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    ReportService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
