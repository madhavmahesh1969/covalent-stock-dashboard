import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'stockDashboardComponent',
  component: StockDashboardComponent,
}, {
  path: 'dashboardComponent',
  component: DashboardComponent,
  children: [{
    component: StockDashboardComponent,
    path: '',
  }, {
    component: AdminComponent,
    path: 'admin',
  }, {
    component: StockDashboardComponent,
    path: 'stockDashboardComponent',
  },
  ],
}, {
  path: '',
  component: MainComponent,
  children: [{
    component: LoginComponent,
    path: '',
  }, {
    component: AdminComponent,
    path: 'admin',
  }
  ],
},
];

export const appRoutes: any = RouterModule.forRoot(routes);
