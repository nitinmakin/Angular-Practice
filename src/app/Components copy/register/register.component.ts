import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { UtilityServiceService } from "../../Service/utility-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:any = FormGroup;
  hide:any=true;
  constructor(private fb: FormBuilder,
    private _route: Router, private snakeBar:UtilityServiceService) { 

      this.form = this.fb.group({

        FirstName: ["", Validators.pattern('[a-zA-Z]{2,}')],
    
        LastName: ["", Validators.pattern('[a-zA-Z]{2,}')],
    
        Email: ["", Validators.email],
    
        Phone: [""],
        Address:[""],
        Password: ["", Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
        Conform: [""],
        State:[""],
        City:[""],
        Pin:[""],
        DOB:[""]
      })  
    }

navigateLogin(){
  this._route.navigate(['/login'])
}
dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  if (view === 'month') {
  const date = cellDate.getDate();
  return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
   }
  return '';
   }

register(){
  if(this.form.valid){
    this.navigateLogin();
    this.snakeBar.snakeBarMethod("Registration Successful")
  }

  else{
    this.snakeBar.snakeBarMethod("Enter Valid records")
  }
}


  ngOnInit(): void {
  }

}
