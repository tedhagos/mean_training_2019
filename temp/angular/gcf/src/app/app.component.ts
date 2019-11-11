import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GCF exercise';
  gcf = 0;
  fno: number;
  sno:number;
  loopcounter:number = 1;

  calculate() {
    this.loopcounter = 1;
    let bigno = 0;
    let smallno = 0;
    if(this.fno > this.sno) {
      bigno = this.fno;
      smallno = this.sno;
    }
    else {
      bigno = this.sno;
      smallno = this.fno
    }
    let rem = bigno % smallno
    while(rem !== 0) {
      bigno = smallno;
      smallno = rem;
      rem = bigno % smallno;
      this.loopcounter++;
    }
    this.gcf = smallno;
  }
}
