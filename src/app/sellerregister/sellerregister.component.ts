import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { sellerService } from '../seller.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sellerregister',
  templateUrl:'./sellerregister.component.html',
  styleUrls: ['./sellerregister.component.css']
})
export class SellerregisterComponent implements OnInit {

  sellerform;
  imgURL: string | ArrayBuffer;
  imagePath :any;
  message :string;
  sellerService :any;
  selectedFiles:any;
  avatarName:any;
 
 
  constructor(private fb: FormBuilder, private sellerservice : sellerService) { }

  ngOnInit(): void {
    this.initform();
  }
  initform(){
    this.sellerform = this.fb.group({
      name : ['', Validators.required],
      username :['',Validators.required],
      email : ['', Validators.required],
      contact : ['', Validators.required],
      password : ['', Validators.required],
      confirm : ['', Validators.required]
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
  

  uploadImage(event)
  {
    let files = event.target.files;
    if(files.length===0)
      return;
 
    var mimeType=files[0].type;
    if(mimeType.match(/image\/*/)==null)
    { 
      Swal.fire("Images Only");
      return;
    }
    this.preview(event.target.files)
    let formData=new FormData();
    this.selectedFiles=files[0];
    this.avatarName=this.selectedFiles.name;
    console.log(this.avatarName);
    formData.append('image', this.selectedFiles, this.selectedFiles.name);
    this.sellerService.uploadImage(formData).subscribe(response=>
{
      console.log(response.message)
      })
  }
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }}

