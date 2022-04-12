import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import {UserProfileComponent} from './profile/user-profile.component'
import {UserRegistrationComponent} from './registration/user-registration.component'

const routes: Routes = [
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
