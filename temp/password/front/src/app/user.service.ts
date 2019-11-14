import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
    return this.http.post('http://localhost:3000/user', userData)
  }

  loginUser(userData): Observable<any> {
    return this.http.post(`http://localhost:3000/login`, userData, {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'})
  }
  
}
