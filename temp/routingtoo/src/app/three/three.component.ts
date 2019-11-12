import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  routeParam:string;

  constructor(private aroute: ActivatedRoute,
              private router:Router) {
  }

  goToTwo() {
    this.router.navigate(['/two'])
  }

  ngOnInit() {
    this.routeParam = this.aroute.snapshot.paramMap.get('id')
  }

}
