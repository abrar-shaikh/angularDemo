import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'users',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
