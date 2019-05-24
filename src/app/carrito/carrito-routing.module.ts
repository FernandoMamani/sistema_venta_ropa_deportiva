import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito.component';
import { Route, Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: CarritoComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
