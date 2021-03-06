import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmodel',
  templateUrl: './addmodel.component.html',
  styleUrls: ['./addmodel.component.css']
})
export class AddmodelComponent implements OnInit {
  
  modelform;
  currentuser;
  imgURL;
  message;
  image;
  filename;

  constructor( private fb: FormBuilder , private productservice : ProductService) { }

  ngOnInit(): void {
    this.currentuser=JSON.parse(sessionStorage.getItem('user'));
    this.initform();

  }
initform(){
  this.modelform = this.fb.group({
    seller : this.currentuser._id,
    name : ['', Validators.required],
    price : ['', Validators.required],
    compatibility : [[], Validators.required],
    image_formats : ['', Validators.required],
    size : ['', Validators.required],
    geometry :['', Validators.required],
    vertices :['', Validators.required],
    textures :['', Validators.required]
  })
}

formSubmit(formdata){
  if(this.modelform.invalid){
    Swal.fire(
      'Error|',
      'fill complete information|',
      'error'
    )
    return;
    }
    formdata.image = this.image;
    formdata.file = this.filename;
    this.productservice.addProduct(formdata).subscribe(data => {
      console.log(data);
    })

  }

  getControl(){
    return this.modelform.controls
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
    let selectedFile = files[0];
    this.image = selectedFile.name;

    formData.append('image',  selectedFile,  selectedFile.name);
    this.productservice.uploadImage(formData).subscribe(response=>
      {
      console.log(response['message'])
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
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }
  
  uploadFile(event)
  {
    let files = event.target.files;
    if(files.length===0)
      return;
 
    
    let formData=new FormData();
    let selectedFile=files[0];
    this.filename= selectedFile.name;
    formData.append('file',  selectedFile,  selectedFile.name);
    this.productservice.uploadFile(formData).subscribe(response=>
      {
      console.log(response['message'])
      })
  }
}
