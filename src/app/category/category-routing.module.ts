import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryModule } from './category.module';
import { MujerComponent } from './mujer/mujer.component';
import { InfanteComponent } from './infante/infante.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  }, {
    path: 'create', component:CategoryComponent,
  },
  {
    path: 'mujeres',
    component: MujerComponent,
  }, 
  {
    path: 'infantes',
    component: InfanteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
