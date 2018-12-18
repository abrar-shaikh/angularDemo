import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

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
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editProfile',
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
