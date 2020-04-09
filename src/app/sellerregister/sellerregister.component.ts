import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { sellerService } from '../seller.service';

@Component({
  selector: 'app-sellerregister',
  templateUrl: './sellerregister.component.html',
  styleUrls: ['./sellerregister.component.css']
})
export class SellerregisterComponent implements OnInit {

  sellerform;

  constructor(private fb: FormBuilder, private sellerservice : sellerService) { }

  ngOnInit(): void {
  }
  initform(){
    this.sellerform = this.fb.group({
      name : ['', Validators.required],
      Email : ['', Validators.required],
      contact : ['', Validators.required]
    })
 
  }
  sellerSubmit(formdata){

    if(this.sellerform.invalid){
      // alert('incorrect data')

      return;
    }

    this.sellerservice.addseller(FormData).subscribe(data => {
      console.log(data);
    })
  }

  getControl(){
    return this.sellerform.controls;
  }
  
}
