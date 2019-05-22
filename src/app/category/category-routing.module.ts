import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryModule } from './category.module';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  }, {
    path: 'create', component:CategoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
