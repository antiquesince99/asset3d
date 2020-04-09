import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url= "http://localhost:3000/model"
  constructor( private http: HttpClient) { }

  addProduct(formdata){
    return this.http.post(this.url+'/add', formdata);
  }
  getallproducts(){
    return this.http.get(this.url+'/getall')
  }
}
