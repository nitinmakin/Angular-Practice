import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CartServiceService } from "../../Service/cart-service.service";
import { UtilityServiceService } from "../../Service/utility-service.service";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ProductServiceService } from "../../Service/product-service.service";
import { DataServiceService } from "../../Service/data-service.service";
@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit {
  @Input() cart: boolean = false;
  cartButtonCondition: boolean[] = [];
  @Input() array: any;
  @Input() url: any;
  productId: string = "";
  cartArray: any = [];
  cartCondition:boolean[]=[];

  constructor(private cartService: CartServiceService, private utilityService: UtilityServiceService, private sanitizer: DomSanitizer,
    private productService: ProductServiceService, private dataService: DataServiceService) { 
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  
  cartButtonConditionFalse(index: any) {
    this.cartButtonCondition[index] = true;
  }

cardConditionFalse(index:number){
  this.cartCondition[index] = true;
 // this.dataService.changeMessage({});
  this.utilityService.displaySnakeBar("Product Removed From Cart")
}

placeOrder(index:number){
  this.cartCondition[index] = true;
  this.dataService.changeMessage({});
  this.utilityService.displaySnakeBar("Order Placed Successfully")
}


  getId(id: any, index: number) {
    this.utilityService.displaySnakeBar("Product Added To Cart")
    this.productId = id;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].id == this.productId) {
        this.cartArray.push(this.array[i]);
        this.cartButtonConditionFalse(index);
      }
      this.cartService.setCartData(this.cartArray)
    }
  }

  message() {
    this.utilityService.displaySnakeBar("Visit Cart To Order This Product this product is already presemt in cart")
  }
  
  ngOnInit() {
  }
}
