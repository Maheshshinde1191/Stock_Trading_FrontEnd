import { Component } from '@angular/core';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  companyArr: any;
  ngOnInit(): void {
    this.getOrderData(103);
    this.getCompanyData();
  }

  constructor(private companyService: CompanyServiceService) { }
  arrOrder: any = [];

  getOrderData(id: number) {
    this.arrOrder = this.companyService.getOrderById(id).subscribe(data => this.arrOrder = data);
    console.log(this.arrOrder);
  }

  getCompanyData() {
    this.companyArr = this.companyService.getAllCompanies().subscribe(data => this.companyArr = data);
  }

  htmlgeneration = function (companyId: number) {
    return this.companyArr.find(data => data.id == companyId).companyName;
  }
}
