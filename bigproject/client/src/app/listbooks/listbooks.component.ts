import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  books: any[]
  constructor(private book:BookService) { }

  ngOnInit() {
    this.book.getBooks().subscribe(data => {
      this.books = data
    })
  }

}
