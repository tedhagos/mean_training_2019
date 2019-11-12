import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  routeParam:any;

  constructor(private aroute: ActivatedRoute,
              private route:Router) {
  }

  ngOnInit() {
    this.routeParam = this.aroute.snapshot.paramMap.get('id')
  }

}
