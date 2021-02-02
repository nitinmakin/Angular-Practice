import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor(public snakeBar:MatSnackBar) { }


  
  public snakeBarMethod(message:any){
    this.snakeBar.open(message, 'cancel')
   
    setTimeout(() => {
      this.snakeBar.dismiss();
    }, 2000)
  }



}
