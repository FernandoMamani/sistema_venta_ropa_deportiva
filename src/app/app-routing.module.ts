import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule'
<<<<<<< HEAD
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  }
=======
  },{ path: 'login', loadChildren: './login/login.component.html'}
>>>>>>> develop
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
