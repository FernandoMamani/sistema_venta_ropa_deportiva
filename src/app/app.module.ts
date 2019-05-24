import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { AngularFireModule } from '@angular/fire';
import {CarritoFirebaseService} from './carrito/carrito-firebase.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule, AppRoutingModule, LayoutModule],
   providers: [
   CarritoFirebaseService
   ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
