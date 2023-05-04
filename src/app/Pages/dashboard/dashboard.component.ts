import { Component } from '@angular/core';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private companyService: CompanyServiceService) { }
  id: number = 103;

  ngOnInit(): void {
    this.getFund(this.id);
    this.getTotalInvestment(this.id);
    this.getCurrentValue(this.id);
    this.getprofitLoss(this.id);
  }

  fund: any = 0;
  getFund(id: number) {
    this.fund = this.companyService.getUserFund(id).subscribe(data => this.fund = data);
    console.log(this.fund);
  }

  totalInvestment: any = 0;
  getTotalInvestment(id: number) {
    this.totalInvestment = this.companyService.getUserHoldingsTotalInvestment(id).subscribe(data => this.totalInvestment = data);
    console.log(this.totalInvestment);
  }

  currentValue: any = 0;
  getCurrentValue(id: number) {
    this.currentValue = this.companyService.getUserHoldingsCurrentValue(id).subscribe(data => this.currentValue = data);
    console.log(this.currentValue);
  }

  profitLoss: any = 0;
  getprofitLoss(id: number) {
    this.profitLoss = this.companyService.getUserHoldingsFindProfitLoss(id).subscribe(data => this.profitLoss = data);
    console.log(this.profitLoss);
  }
}
