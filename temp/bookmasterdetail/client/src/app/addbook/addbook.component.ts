import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private service:BookService) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm){
    console.log(`in onFormSubmit: ${form.value}`)
    this.service.addBook(form.value).subscribe((data)=> {
      // console.log(data);
    })
  }
}
