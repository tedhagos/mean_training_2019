import { Component, OnInit } from '@angular/core';
import { CustomerSetting } from './customer-settings';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

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
