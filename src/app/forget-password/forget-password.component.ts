import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  otp;
  resetForm;
  showReset=false;
  forgetuser;

    constructor(private http: HttpClient, private formBuilder: FormBuilder, private userservice:UserService ) { }

    ngOnInit() 
    {
      this.initForms();
    }

    initForms()
    {
      this.resetForm=this.formBuilder.group({
      otp:'',
      new:['',Validators.minLength(5)],
      confirm:''
        }, {validation: this.matchPassword('new','confirm')})
    }
    
    sendOTP(email){
      this.showReset=true;
      this.otp=Math.floor(1000+Math.random()*9000)
      this.userservice.getUserByEmail(email).subscribe(data => {
        this.forgetuser = data;

        if(this.forgetuser){
          this.sendMail({from: 'ry663164@gmail.com',
          to: email,
          message:` Your OTP for reseting password is ${this.otp}`})
          .subscribe((data) =>
          {
            console.log(data);
          })
        }else{
          Swal.fire({
            icon : 'error',
            title : 'Not Found',
            text : 'No user found with this email'
          })
        }
      })
      
    }
    
  sendMail(data){
    return this.http.post('http://localhost:3000/util/sendmail', data);
  }
  matchPassword(password,confirm_pass){
    return (userform)=> {
      let passControl=userform.controls[password];
      let confirmControl=userform.controls[confirm_pass];

      if(passControl.value !==confirmControl.value)
      {
        confirmControl.setErrors({match:true})
      }
      }
    }
      resetPassword(formdata){
      console.log(this.otp)
      if(this.otp == formdata.otp)
      { 
        console.log("Correct OTP");
        this.userservice.changePassword(this.forgetuser._id, formdata.password
          ).subscribe(data => {
        console.log(data);  
      })
        return;
      }
      alert("Invalid OTP");
    }

}
