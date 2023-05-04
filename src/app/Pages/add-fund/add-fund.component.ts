import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanyServiceService } from 'src/app/company-service.service';
import { User } from './User';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent {
  constructor(private companyService: CompanyServiceService) { }
  id: number = 103;
  quantity = new FormControl(0);
  accountBalance: any
  addFund() {

    if(this.quantity.value == 0){
      alert("Please enter non-zero amount!");
      return;
    }

    const dt = new Date();
    const userObj = new User(this.id, "", "", 0, "", dt, 0, this.quantity.value);
    this.companyService.updateFund(userObj).subscribe((result) => {
      console.log(result);
    });
    alert("Fund Added Succesfully : " + this.quantity.value);
  }

  withdrawFund() {
    if(this.quantity.value == 0){
      alert("Please enter non-zero amount!");
      return;
    }

    this.accountBalance = this.companyService.getUserFund(this.id).subscribe(data => this.accountBalance = data);
    console.log(this.accountBalance)
    if(this.accountBalance < this.quantity.value) {
      alert("Please enter amount less than existing account Balance : " + this.accountBalance);
      return
    }

    const dt = new Date();
    const userObj = new User(this.id, "", "", 0, "", dt, 0, this.quantity.value);
    this.companyService.updateFundWithdraw(userObj).subscribe((result) => {
      console.log(result);
    });
    alert("Fund Withdraw Succesfull : " + this.quantity.value);
  }
}
