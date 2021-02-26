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
  form:FormGroup;
  hide:boolean=true;
  constructor(private fb: FormBuilder,
    private _route: Router, private utilityService:UtilityServiceService) { 

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
navigateInfo(){
  this._route.navigate(['info'])
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
    this.navigateInfo();
    this.utilityService.displaySnakeBar("Registration Successful")
  }

  else{
    this.utilityService.displaySnakeBar("Enter Valid records")
  }
}


  ngOnInit(): void {
  }

}
