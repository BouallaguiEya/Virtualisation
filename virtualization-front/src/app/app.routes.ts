import { Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UsersComponent} from "./users/users.component";

export const routes: Routes = [
  {
    path: 'welcome',
    component:  WelcomeComponent
  },
  {
    path: 'sign-in',
    component:  SignInComponent
  },
  {
    path: 'sign-up',
    component:  SignUpComponent
  },
  {
    path: 'users',
    component:  SignUpComponent
  },
  {
    path: 'users/all',
    component: UsersComponent
  },
  {
    path: 'user',
    component:  SignUpComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  }
];
