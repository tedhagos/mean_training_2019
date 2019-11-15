import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions:any = {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'}

  constructor(private http: HttpClient) { }

  register(userData) {
    this.http.post('http://localhost:3000/user', userData, this.httpOptions).subscribe(data => {
      console.log(data);
    })
  }
}
