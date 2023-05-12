import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanyServiceService } from 'src/app/company-service.service';
import { UserHoldings } from '../holdings/UserHoldings';
import { order } from './order';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private companyService: CompanyServiceService) { }
  arrCompany: any = [];
  id: number = 103;

  ngOnInit(): void {
    this.getCompaniesData();
    this.changeCompanyId;
  }

  quantity = new FormControl(1);
  price = 0;
  companyId: number = 102;
  companyName = "";
  description: string = "";
  currentPrice: number = 0;

  searchText = new FormControl();

  getCompaniesData() {
    this.arrCompany = this.companyService.getAllCompanies().subscribe(data => this.arrCompany = data);
    console.log(this.arrCompany);
  }

  changeCompanyId(id: number) {
    this.companyId = id;
    this.description = this.arrCompany.find(x => x.id == this.companyId).companyDescription;
    this.price = this.arrCompany.find(x => x.id == this.companyId).stockPrice;
    this.companyName = this.arrCompany.find(x => x.id == this.companyId).companyName;
    this.currentPrice = this.arrCompany.find(x => x.id == this.companyId).stockPrice;
  }

  buyStock() {
    const dt = new Date();
    const orderObj = new order(6, this.id, this.companyId, dt, 1, this.price, this.quantity.value, (this.price * this.quantity.value));
    this.companyService.insertOrder(orderObj).subscribe((result) => {
      console.log(result);
    });

    const userHoldingsObj = new UserHoldings(this.id, this.companyId, this.quantity.value, this.price, this.currentPrice);
    this.companyService.insertHolding(userHoldingsObj).subscribe((result) => {
      console.log(result);
    });
  }

  sellStock() {
    const dt = new Date();
    const orderObj = new order(6, this.id, this.companyId, dt, 0, this.price, this.quantity.value, (this.price * this.quantity.value));
    this.companyService.insertOrder(orderObj).subscribe((result) => {
      console.log(result);
    });

    const userHoldingsObj = new UserHoldings(this.id, this.companyId, this.quantity.value, this.price, this.currentPrice);
    this.companyService.updateHolding(userHoldingsObj).subscribe((result) => {
      console.log(result);
    });
  }



  search() {
    const txt = this.searchText.value;

    if(!txt) {
      this.getCompaniesData();
      return;
    }

    const arrCompanySearch: any = [];
    for(var d of this.arrCompany) {
      if(d.companyName.toLowerCase().includes(txt.toLowerCase())){
        arrCompanySearch.push(d);
      }
    }

    this.arrCompany = arrCompanySearch
  }

}
