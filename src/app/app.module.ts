import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { AngularFireModule } from '@angular/fire';
<<<<<<< HEAD


@NgModule({
  declarations: [AppComponent],
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
>>>>>>> develop
  imports: [BrowserModule, AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule, AppRoutingModule, LayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
