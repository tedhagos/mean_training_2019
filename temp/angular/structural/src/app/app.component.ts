import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '*ngIf and *ngFor';
  divHidden: boolean = false;
  buttonText = 'hide';
  foo = ''; // truthy and falsey

  names: any[] = ['John Doe','Ryan Dahl','Brendan Eich','Dennis Ritchie'];
 
  showHide() {
    this.divHidden = !this.divHidden;
    this.buttonText = this.buttonText === 'hide'? 'show': 'hide';
  }
}
