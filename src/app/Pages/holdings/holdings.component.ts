import { Component } from '@angular/core';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent {
  constructor(private companyService: CompanyServiceService) { }
  arrHoldings: any = [];
  id: number = 103;

  ngOnInit(): void {
    this.getHoldingsData(this.id);
    this.getTotalInvestment(this.id);
    this.getCurrentValue(this.id);
    this.getprofitLoss(this.id);
  }

  getHoldingsData(id: number) {
    this.arrHoldings = this.companyService.getUserHoldings(id).subscribe(data => this.arrHoldings = data);
    console.log(this.arrHoldings);
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
