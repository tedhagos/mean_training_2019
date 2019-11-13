import { Component, OnInit } from '@angular/core';
import { CustomerSetting } from '../databinding/customer-settings';

@Component({
  selector: 'app-cssclasses',
  templateUrl: './cssclasses.component.html',
  styleUrls: ['./cssclasses.component.css']
})
export class CssclassesComponent implements OnInit {

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
