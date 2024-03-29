import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { 
  }

  getAllBooks():Observable<any> {
    return this.http.get('http://localhost:3000/book')
  }
}
