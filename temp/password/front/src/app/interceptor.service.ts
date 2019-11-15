import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next) {
    console.log('INTERCEPTOR')
    console.log(req)
    // let authReq = req.clone({headers: req.headers.set('Authorization', 'token ' + localStorage.getItem('token')})

    let authReq = req.clone({headers: req.headers.set('Authorization', `token ${localStorage.getItem('token')}`)})

    return next.handle(authReq)
  }
}
