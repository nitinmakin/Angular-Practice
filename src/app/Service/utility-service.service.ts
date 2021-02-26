import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
  constructor(public snackBar: MatSnackBar) { }

  public displaySnakeBar(message: any) {
    this.snackBar.open(message, 'cancle' , {
    
      panelClass: ['my-custom-snackbar'],
    })
    setTimeout(() => {
           this.snackBar.dismiss();
       }, 2500);
  }
}
