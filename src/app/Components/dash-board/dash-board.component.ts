import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from "../../Service/product-service.service";


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
productArray:any=[];
  constructor(private productService:ProductServiceService) { }

  displayProducts() {
    this.productService.getProducts().subscribe(result => {
      this.productArray = result;
      console.log("Result is ", result)
    },
      (error) => {
        console.log(error)
      }
    )
  }


  ngOnInit(): void {
    this.displayProducts();
  }

}
