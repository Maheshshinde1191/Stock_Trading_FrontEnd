import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFundComponent } from './Pages/add-fund/add-fund.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HoldingsComponent } from './Pages/holdings/holdings.component';
import { HomeComponent } from './Pages/home/home.component';
import { OrdersComponent } from './Pages/orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'holdings', component: HoldingsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'funds', component: AddFundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
