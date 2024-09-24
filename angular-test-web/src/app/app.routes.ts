import { Routes } from '@angular/router';

import { DashboardComponent } from './Dashboard/dashboard.component';

import { authenticationGuard } from './Authentication/authentication.guard';
import { LoginFormComponent } from './Authentication/login-form/login-form.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { UnauthorizedComponent } from './Authentication/unauthorized/unauthorized.component';

import { MyProfileComponent } from './User/my-profile/my-profile.component';
import { ChangePasswordFormComponent } from './User/change-password-form/change-password-form.component';

import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';

import { RouteNotFoundComponent } from './Navigation/route-not-found/route-not-found.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Dashboard',
    pathMatch: 'full'
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    data: { breadcrumb: '' }
  },
  {
    path: 'Login',
    component: LoginFormComponent,
    title: 'Login',
    data: { breadcrumb: 'Log-In' }
  },
  {
    path: 'ForgetPswd',
    component: ForgetPasswordComponent,
    title: 'Forget Password',
    data: { breadcrumb: 'Forget Password' }
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
    data: { breadcrumb: 'My Profile' },
    canActivate: [authenticationGuard],
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
    redirectTo: 'NotFound'
  },
  {
    path: 'NotFound',
    component: RouteNotFoundComponent,
    title: 'Not Found'
  }
];
