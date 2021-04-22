import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos agregados
import { LoginModule } from './login/login.module';
import { PagesModule } from './pages/pages.module';

var firebaseConfig = {
  apiKey: "AIzaSyDGzjDGaqG1wOsyBXXgDQcqV7VMFRVl73w",
  authDomain: "saladejuegosv2.firebaseapp.com",
  projectId: "saladejuegosv2",
  storageBucket: "saladejuegosv2.appspot.com",
  messagingSenderId: "10178501775",
  appId: "1:10178501775:web:9b5604bf05a323402e24fa",
  measurementId: "G-5TET92SQ5K"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PagesModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
