import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFundComponent } from './Pages/add-fund/add-fund.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HoldingsComponent } from './Pages/holdings/holdings.component';
import { HomeComponent } from './Pages/home/home.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { LoginComponent } from './Pages/login/login.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'orders', component: OrdersComponent , canActivate: [AuthGuardService]},
  { path: 'holdings', component: HoldingsComponent , canActivate: [AuthGuardService]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'funds', component: AddFundComponent, canActivate: [AuthGuardService] },
  { path: '', component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
