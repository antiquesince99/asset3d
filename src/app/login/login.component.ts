import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  constructor(private fb: FormBuilder, private userservice : UserService , private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginform = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  loginSubmit(formdata){
    this.userservice.getByUsername(formdata.username).subscribe(data =>{
      let logged_user = data;
 if(logged_user){
   if (logged_user['password']== formdata['password']){
    //   add user details tosession storage
    sessionStorage.setItem('user', JSON.stringify(logged_user));
    sessionStorage.setItem('admin', JSON.stringify(true));
      if(logged_user.admin){
        // navigate to admin dashboaard

        this.router.navigate(['/admin'])
      return;
      }else{
        // navigate to home
        this.router.navigate(['/home'])
      return;
      }
    }
    else{
      console.log("password incorrect")
      Swal.fire({
        icon : 'error',
        title : 'opps',
        text : "an error occerd"
      });
    }
  }
  else{
    console.log("user not found")
    Swal.fire({
      icon : 'error',
      title : 'opps',
      text : "an error occerd"
    })
  }
});
  }
  
  

  getControl(){
    return this.loginform.controls;
  }

}