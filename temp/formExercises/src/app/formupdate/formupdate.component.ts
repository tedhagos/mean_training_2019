import { Component } from '@angular/core';
import { ICustomer} from '../customer-settings';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formupdate',
  templateUrl: './formupdate.component.html',
  styleUrls: ['./formupdate.component.css']
})
export class FormupdateComponent {

  customer: ICustomer = {
    name : null,
    emailOffers:  true,
    subscriptionType: "Quarterly",
    ideStyle : "default white"
  }

  onSubmit(form: NgForm) {
    console.log(`in onSubmit: ${form.valid}`);
  }

  onCustNameBlur(custField) {

  }

}
