import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { ModuleComponent } from '../module/module.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  }, {
    path: 'create', component: ModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
