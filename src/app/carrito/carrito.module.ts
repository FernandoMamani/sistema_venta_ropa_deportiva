import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito.component';
import { CarritoRoutingModule } from './carrito-routing.module';
import {CarritoFirebaseService} from './carrito-firebase.service';

@NgModule({
  declarations: [CarritoComponent],
  imports: [
    CommonModule, CarritoRoutingModule
  ]
})
export class CarritoModule { }
