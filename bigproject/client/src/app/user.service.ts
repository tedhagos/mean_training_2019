import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions:any = {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'}

  constructor(private http: HttpClient) { }

  login(userData) {
    this.http.post('http://localhost:3000/login', userData, this.httpOptions).subscribe(data => {
      console.log(data)
      localStorage.setItem('token', data.toString())
    })
  }

  register(userData) {
    this.http.post('http://localhost:3000/user', userData, this.httpOptions).subscribe(data => {
      console.log(data);
    })
  }
}
