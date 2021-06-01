import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path:"", loadChildren:() => import('./users/users.module').then(m => m.UsersModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
