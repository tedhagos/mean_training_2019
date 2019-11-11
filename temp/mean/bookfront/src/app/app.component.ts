import { Component } from '@angular/core';
import { BookService } from './book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookfront';
  books: any[];

  constructor(private service: BookService) {
    service.getBooks().subscribe((books) => {
      this.books = books;
    })
  }

}
