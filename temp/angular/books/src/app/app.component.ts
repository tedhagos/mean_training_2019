import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  filter = '';
  booksCopy: any[];

  constructor() {
    this.booksCopy = this.books;
  }

  filterArray(filterVal) {
    if (filterVal === '') {
      this.books = this.booksCopy;
    }
  
    this.books = this.books.filter((book) => {
      return (book.name.indexOf(filterVal) !== -1);
    });
  }

  books: any[] = [
    {
      "id": 1,
      "name": "The C Programming language",
      "author": "Dennis Ritchie",
      "price":  10.25,
      "rating": 5,
      "image": "the-c-programming-language.jpg"
    },
    {
      "id": 2,
      "name": "Pro Angular 6",
      "author": "Adam Freeman",
      "price":  29.5012345,
      "rating": 4.5,
      "image": "pro-angular6.jpg"
    },
    {
      "id": 3,
      "name": "Angular in Action",
      "author": "Jeremy Wilken",
      "price":  37.25,
      "rating": 4,
      "image": "angular-in-action.jpg"
    },
    {
      "id": 4,
      "name": "Web Development in Node and Express",
      "author": "Ethan Brown",
      "price":  19.00,
      "rating": 4,
      "image": "webdevelopment-node-express.jpg"
    },
    {
      "id": 5,
      "name": "Angular Up & Running",
      "author": "Shyam Seshadri",
      "price":  30.00,
      "rating": 3.5,
      "image": "angular-upandrunning.jpg"
    },
    {
      "id": 6,
      "name": "Head First Android",
      "author": "Dawn Griffiths",
      "price":  36.95,
      "rating": 4,
      "image": "headfirst-android.jpg"
    },
    {
      "id": 7,
      "name": "Reactive Programming with RxJava",
      "author": "Tomasz Nurkiewicz",
      "price":  30.25,
      "rating": 4.5,
      "image": "reactive-programming-rxjava.jpg"
    },
    {
      "id": 8,
      "name": "Fullstack JavaScript",
      "author": "Azat Mardan",
      "price":  32,
      "rating": 4.5,
      "image": "fullstack-javascript.jpg"
    }
  ]
  
}
