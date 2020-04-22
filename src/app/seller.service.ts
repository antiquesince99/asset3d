import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class sellerService {

  url = 'http://localhost:3000/seller';

  constructor(private http: HttpClient) { }

  addseller(data){
    return this.http.post(this.url+'/add', data);
  }
  
  getallseller(){
    return this.http.get(this.url+`/getall`);
  }
}
