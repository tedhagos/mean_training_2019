import { Component, OnInit } from '@angular/core';
import { CustomerSetting } from '../databinding/customer-settings';

@Component({
  selector: 'app-html5validation',
  templateUrl: './html5validation.component.html',
  styleUrls: ['./html5validation.component.css']
})
export class Html5validationComponent implements OnInit {

  customerSetting: CustomerSetting  = {
    customerName: "John Doe",
    emailOffers: true,
    ideStyle: "default white",
    subscriptionType: "Annually" 
  }

  constructor() { }

  ngOnInit() {
  }

}
