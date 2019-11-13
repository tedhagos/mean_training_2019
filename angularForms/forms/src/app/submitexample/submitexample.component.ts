import { Component, OnInit } from '@angular/core';
import { CustomerSetting } from '../databinding/customer-settings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submitexample',
  templateUrl: './submitexample.component.html',
  styleUrls: ['./submitexample.component.css']
})
export class SubmitexampleComponent implements OnInit {

  customerSetting: CustomerSetting  = {
    customerName: null,
    emailOffers: true,
    ideStyle: "default white",
    subscriptionType: "Annually" 
  }

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    console.log(`inside onSubmit, Is Form Valid: ${form.valid}`)
  }

}
