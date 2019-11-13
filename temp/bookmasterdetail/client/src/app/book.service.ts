import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get('http://localhost:3000/book')
  }

  getBook(id): Observable<any> {
    return this.http.get(`http://localhost:3000/book/${id}`)
  }

  addBook(formData):Observable<any> {
    console.log('in addBook()')
    console.log(formData)
    return this.http.post('http://localhost:3000/book',formData)
  }
  

}
