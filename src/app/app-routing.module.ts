import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule'

  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path:'inventario',
    loadChildren: './inventario/inventario.module#InventarioModule'
  },
{
  path:'category',
  loadChildren: './category/category.module#CategoryModule'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
