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
  path:'category',
  loadChildren: './category/category.module#CategoryModule'
  },
  {
    path: 'carrito',
    loadChildren: './carrito/carrito.module#CarritoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
