import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() starRating:number;
  @Output() onDataFromChild: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {} 
  
  tellParent(data) {
    console.log('tell parent', data)
    this.onDataFromChild.emit(data)
  }

}
