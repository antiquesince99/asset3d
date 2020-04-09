import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-managepassword',
  templateUrl: './managepassword.component.html',
  styleUrls: ['./managepassword.component.css']
})
export class ManagepasswordComponent implements OnInit {
otp;
  constructor(private mailservice: MailService) { }

  ngOnInit(): void {
  }
  sendOtp(email){
    this.otp = Math.floor(1000+Math.random()*9000);
    this.mailservice.sendMail({from:'ry663164@gmail.com',to:email,message:`your otp for resetting password is ${this.otp}`})
    .subscribe((data)=>{
      console.log(data);
      console.log(this.otp);
    })
  }


}
