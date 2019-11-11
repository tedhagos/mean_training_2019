import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books:any[]
  dataSource;
  displayedColumns = ['name','author','price','rating']
  
  constructor(private bservice:BookService) { 
  }

  ngOnInit() {
    this.bservice.getAllBooks().subscribe((data)=>{
      this.books = data
      this.dataSource = new MatTableDataSource(this.books);
    })
  }

  applyFilter(filterval) {
    this.dataSource.filter = filterval.trim().toLowerCase()
  }

}
