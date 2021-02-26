import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor() { }
  cartArray:any=[];
 
  setCartData(val: any) {
    this.cartArray =val; //creates a new reference 
  }

  getCartData() {
    return this.cartArray;
  }

}
