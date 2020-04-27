import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-managemodel',
  templateUrl: './managemodel.component.html',
  styleUrls: ['./managemodel.component.css']
})
export class ManagemodelComponent implements OnInit {
products;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getallproducts().subscribe(data => {
      console.log(data);
      this.products=data;
    })
  }

}
