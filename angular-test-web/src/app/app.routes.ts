import { Routes } from '@angular/router';

import { DashboardComponent } from './Dashboard/dashboard.component';

import { authenticationGuard } from './Authentication/authentication.guard';
import { LoginFormComponent } from './Authentication/login-form/login-form.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { LogoutComponent } from './Authentication/logout/logout.component';
import { UnauthorizedComponent } from './Authentication/unauthorized/unauthorized.component';

import { MyProfileComponent } from './User/my-profile/my-profile.component';
import { ChangePasswordFormComponent } from './User/change-password-form/change-password-form.component';

import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    title: 'Dashboard'
  },
  {
    path: 'Login',
    component: LoginFormComponent,
    title: 'Login',
    //canActivate: [authenticationGuard],
  },
  {
    path: 'ForgetPswd',
    component: ForgetPasswordComponent,
    title: 'ForgetPswd'
  },
  {
    path: 'Logout',
    component: LogoutComponent,
    title: 'Logout',
    canActivate: [authenticationGuard]
  },
  {
    path: 'Unauthorized',
    component: UnauthorizedComponent,
    title: 'Unauthorized'
  },
  {
    path: 'MyProfile',
    component: MyProfileComponent,
    title: 'My Profile',
    canActivate: [authenticationGuard]
  },
  {
    path: 'ChangePswd',
    component: ChangePasswordFormComponent,
    title: 'Change Password',
    canActivate: [authenticationGuard],
  },
  {
    path: 'Product',
    component: ProductListComponent,
    title: 'Products',
    canActivate: [authenticationGuard],
  },
  {
    path: 'Product/:id',
    component: ProductDetailsComponent,
    title: 'Product Details',
    canActivate: [authenticationGuard],
  },
  {
    path: '**',
    component: DashboardComponent,
    pathMatch: 'full'
  },
];
