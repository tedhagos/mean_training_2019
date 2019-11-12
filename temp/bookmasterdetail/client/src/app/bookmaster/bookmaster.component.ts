import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookmaster',
  templateUrl: './bookmaster.component.html',
  styleUrls: ['./bookmaster.component.css']
})
export class BookmasterComponent implements OnInit {

  books:any[]
  constructor(private service: BookService) { }

  ngOnInit() {
    this.service.getBooks().subscribe((data)=> {
      this.books = data
    })
  }

}
