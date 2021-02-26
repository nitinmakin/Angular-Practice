import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityServiceService } from "../../Service/utility-service.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide:boolean=true;
  email:string="";
  password:string="";
  form:FormGroup;


  constructor(private fb: FormBuilder,
    private _route: Router,private utilityService:UtilityServiceService) { 
      this.form = this.fb.group({
        Email: ["", Validators.email],
        Password: ["", Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
      })  
    }

  
 

  navigateRegister(){
    this._route.navigate(['/register'])
  }

  login(){
    if(this.form.valid){
      if(this.email == "admin@gmail.com"){
      this._route.navigate(['/adminpanal'])
      this.utilityService.displaySnakeBar(" Admin Login Successful");
    }
      else {
        this._route.navigate(['/dashboard'])
        this.utilityService.displaySnakeBar(" user Login Successful");
      }
    }
    else{
      this.utilityService.displaySnakeBar("Plese enter valid email and password");
    }
  }

  ngOnInit(): void {
  }

}
