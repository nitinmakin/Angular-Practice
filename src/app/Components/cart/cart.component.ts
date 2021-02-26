import { Component, OnInit } from '@angular/core';
import { CartServiceService } from "../../Service/cart-service.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  cartArray :any= [];
  cart: boolean = true;
  constructor(private cartService: CartServiceService) {
  }

  ngOnInit(): void {
    this.cartArray = this.cartService.getCartData();
  }
}
