import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  routeParam;

  constructor(private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.routeParam = this.aroute.snapshot.paramMap.get('id')
  }

}
