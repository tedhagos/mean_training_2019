import { Component } from '@angular/core';
import { BookService} from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend2';
  books:any[]
  
  constructor(private bservice:BookService){
    bservice.getAllBooks().subscribe((data)=> {
      this.books = data;
    })
  }

}
