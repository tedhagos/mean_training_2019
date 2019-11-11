import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books:any[]
  displayedColumns = ['name','author','rating','price']
  constructor(private bservice:BookService) { 
  }

  ngOnInit() {
    this.bservice.getAllBooks().subscribe((data)=>{
      this.books = data
    })
  }

}
