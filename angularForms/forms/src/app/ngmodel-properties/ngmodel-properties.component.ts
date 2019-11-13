import { Component, OnInit } from '@angular/core';
import { CustomerSetting } from '../databinding/customer-settings';

@Component({
  selector: 'app-ngmodel-properties',
  templateUrl: './ngmodel-properties.component.html',
  styleUrls: ['./ngmodel-properties.component.css']
})
export class NgmodelPropertiesComponent implements OnInit {

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
