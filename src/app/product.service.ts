import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
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


  getProductById(id) : Observable<any>{
    return this.http.get(this.url+`/getbyid/${id}`);
  }


  addReview(data){
    return this.http.post('http://localhost:3000/review/add', data);
  }


  getAllReviews(product_id){
    return this.http.get(`http://localhost:3000/review/getbyproduct/${product_id}`);
  }

  getUserReview(user_id){
    return this.http.get(`http://localhost:3000/review/getbyuser/${user_id}`);
  }

}
