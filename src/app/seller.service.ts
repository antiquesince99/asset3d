import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class sellerService {

  url = 'http://localhost:3000/seller';
  seller = false;

  constructor(private http: HttpClient) { }

  addseller(data){
    return this.http.post(this.url+'/add', data);
  }
  
  getallseller(){
    return this.http.get(this.url+`/getall`);
  }

  updateseller(id,data){
    return this.http.put(this.url + '/update/'+id, data);
  }


  getsellerByemail(email) {
    return this.http.get(this.url + '/getbyemail/' + email);
  }
  uploadImage(file): Observable<any> {
    return this.http.post(this.url + '/addimg', file)
  }

}
