import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user';
  loggedin = false;

  constructor(private http: HttpClient, private router : Router) { 
    if(sessionStorage.getItem('user')){
      this.loggedin = true;
    }
  }

  addUser(data){
    return this.http.post(this.url+'/add', data);
  }

  
  getByUsername(username){
    return this.http.get(this.url+`/getbyusername/${username}`);
  }


  getallusers(){
    return this.http.get(this.url+`/getall`);
  }


  logout(){
    sessionStorage.reoveItem('user');
    sessionStorage.removeItem('admin');
    this.router.navigate(['/login']);
  }


uploadImage(file)
{
return this.http.post(this.url+'/addimg',file)
}
}
