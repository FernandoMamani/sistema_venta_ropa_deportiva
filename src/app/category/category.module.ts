import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { MujerComponent } from './mujer/mujer.component';
import { InfanteComponent } from './infante/infante.component';

@NgModule({
  declarations: [CategoryComponent, MujerComponent, InfanteComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
