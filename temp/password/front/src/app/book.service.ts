import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http:HttpClient) { }
  
  httpOptions:any = {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'}

  getAllBooks() {
    this.http.get('http://localhost:3000/book').subscribe( data => {
      console.log(data)
    })
  }
}
