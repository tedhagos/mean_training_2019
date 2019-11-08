import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastname = "Doe";
  firstname  = "John";
  email = "johndoe@gmail.com";

  favColor = "red";

  returnSomething() {
    return "Something"
  }

  changeColor(tempcolor) {
    this.favColor = tempcolor;
  }

  clickButton() {
    this.firstname = "Jane";
  }
}