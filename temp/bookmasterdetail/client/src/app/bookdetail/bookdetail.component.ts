import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit, AfterViewInit {


  constructor(private route: ActivatedRoute,
              private service: BookService) { }

  book:any

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.getBook(id).subscribe((data)=> {
      this.book = data
    })
  }

  ngAfterViewInit(): void {

  }

}
