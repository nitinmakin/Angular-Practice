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

  constructor(private fb: FormBuilder,
    private _route: Router,private snakeBar:UtilityServiceService) { 


      this.form = this.fb.group({
        Email: ["", Validators.email],
        Password: ["", Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
      })  
    }

  form:any = FormGroup;
  hide:any=true;



  navigateRegister(){
    this._route.navigate(['/register'])
  }
  

  login(){
    if(this.form.valid){
      this.navigateRegister();
      this.snakeBar.snakeBarMethod("Login Successful");
    }
    else{
      this.snakeBar.snakeBarMethod("Plese enter valid email and password");
    }
  }

  ngOnInit(): void {
  }

}
