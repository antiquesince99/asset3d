import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  url = 'http://localhost:3000/order'

  constructor(private http: HttpClient, private router: Router) { }
  addOrder(data){
    return this.http.post(this.url+'/add', data);

  }
}
