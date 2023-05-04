import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserHoldings } from './Pages/holdings/UserHoldings';
import { order } from './Pages/home/order';
import { User } from './Pages/add-fund/User';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http: HttpClient) { }

  getAllCompanies() {
    return this.http.get("http://localhost:8999/company/getAllCompanies");
  }

  getOrderById(id: number) {
    return this.http.get("http://localhost:8999/order/getOrders/" + id);
  }

  getUserHoldings(id: number) {
    return this.http.get("http://localhost:8999/holdings/getUserHoldings/" + id);
  }

  getUserHoldingsTotalInvestment(id: number) {
    return this.http.get("http://localhost:8999/holdings/findTotalInvestment/" + id);
  }

  getUserHoldingsCurrentValue(id: number) {
    return this.http.get("http://localhost:8999/holdings/findCurrentValue/" + id);
  }

  getUserHoldingsFindProfitLoss(id: number) {
    return this.http.get("http://localhost:8999/holdings/findProfitLoss/" + id);
  }

  insertOrder(orderObj: order) {
    return this.http.post('http://localhost:8999/order/insertOrder', orderObj);
  }

  insertHolding(userHoldingsObj: UserHoldings) {
    return this.http.post('http://localhost:8999/holdings/insertHoldings', userHoldingsObj);
  }

  updateHolding(userHoldingsObj: UserHoldings) {
    return this.http.post('http://localhost:8999/holdings/updateHoldings', userHoldingsObj);
  }

  updateFund(userObj: User) {
    return this.http.put('http://localhost:8999/user/updateFund', userObj);
  }

  updateFundWithdraw(userObj: User) {
    return this.http.put('http://localhost:8999/user/updateFundWithdraw', userObj);
  }

  getUserFund(id: number) {
    return this.http.get('http://localhost:8999/user/getFund/' + id);
  }
}
