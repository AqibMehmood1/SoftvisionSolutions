import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import firebase from 'firebase';
import { AbcComponent } from './abc/abc.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const firebaseConfig = {
  apiKey: 'AIzaSyBa2IjDfRJJJfhVqks1Lkj-xdotFHIk1wY',
  authDomain: 'totocompanyltd.firebaseapp.com',
  projectId: 'totocompanyltd',
  storageBucket: 'totocompanyltd.appspot.com',
  messagingSenderId: '1068251351725',
  appId: '1:1068251351725:web:2d81e173babd68a9515424',
  measurementId: 'G-SSSL493CG1',
};

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    AdvantagesComponent,
    ContactusComponent,
    HeaderComponent,
    AbcComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
