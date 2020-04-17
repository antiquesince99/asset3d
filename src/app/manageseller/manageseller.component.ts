import { Component, OnInit } from '@angular/core';
import { sellerService } from '../seller.service';

@Component({
  selector: 'app-manageseller',
  templateUrl: './manageseller.component.html',
  styleUrls: ['./manageseller.component.css']
})
export class ManagesellerComponent implements OnInit {
  
  sellers;

  constructor(private sellerservice: sellerService) { }

  ngOnInit(): void {
    this.sellerservice.getallseller().subscribe((data)=>{

      this.sellers = data;
      console.log(data);
      
  }

}
}