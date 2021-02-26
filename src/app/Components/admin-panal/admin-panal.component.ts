import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from "../../Service/product-service.service";
import { MatTableDataSource } from '@angular/material/table';
import { AddProductComponent } from "../add-product/add-product.component";
import { MatDialog } from '@angular/material/dialog';
import { UtilityServiceService } from "../../Service/utility-service.service";
import { DataServiceService } from "../../Service/data-service.service";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-admin-panal',
  templateUrl: './admin-panal.component.html',
  styleUrls: ['./admin-panal.component.scss']
})

export class AdminPanalComponent implements OnInit {
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(data => { this.displayProducts() });
  }

  dataSource: any;
  productArray: any = [];
  index: number = 1;
  displayedColumns: string[] = ['index', 'image', 'name', 'price', 'update', 'delete',];

  constructor(private productService: ProductServiceService, public dialog: MatDialog, private utilityService: UtilityServiceService
    , private dataService: DataServiceService) { }
  openDialog() {
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  displayProducts() {
    this.productService.getProducts().subscribe(result => {
      this.productArray = result;
      this.productArray.reverse();
      console.log("Result is ", result)
      this.dataSource = new MatTableDataSource(this.productArray);
    },
      (error) => {
        console.log(error)
      }
    )
  }

  deleteProduct(element: any) {
    this.productService.deleteProduct(element).subscribe((result: any) => {
      this.utilityService.displaySnakeBar("Product deleted Successfully");
      this.displayProducts();
    },
      (error: any) => {
        this.utilityService.displaySnakeBar("OOPS..somethimg went wrong...")
      })
  }
}
