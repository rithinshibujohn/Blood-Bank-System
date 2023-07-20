import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonorregisterComponent } from './pages/donorregister/donorregister.component';
import { LoginComponent } from './pages/login/login.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { BloodbankComponent } from './pages/bloodbank/bloodbank.component';
import { RequestComponent } from './pages/request/request.component';
import { SingleComponent } from './pages/single/single.component';
import { WorksComponent } from './pages/works/works.component';
import { Single1Component } from './pages/single1/single1.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    DonorregisterComponent,
    LoginComponent,
    FaqComponent,
    CarouselComponent,
    BloodbankComponent,
    RequestComponent,
    SingleComponent,
  
    WorksComponent,
       Single1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
