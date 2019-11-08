import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  @ViewChild('mcity', {static:true}) cityEl: ElementRef;
  @ViewChild('mregion', {static:true}) regionEl: ElementRef;

  constructor(private titleService:Title) {}
  
  name: string = "John Doe";
  address: string = "123 Makati";
  city: string = "Makati";
  region: string = "NCR";

  changeTitle() {
    this.titleService.setTitle(this.name);
  }

  changeRegion(arg) {
    this.region = arg;
  }

  changeCity(arg) {
    this.city = arg;
  }

  ngAfterViewInit(): void {
    this.regionEl.nativeElement.value = this.region;
    this.cityEl.nativeElement.value = this.city;
  }
}
