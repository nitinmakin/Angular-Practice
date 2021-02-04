import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityServiceService } from "../../Service/utility-service.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  form:any = FormGroup;
  hide:any=true;
  familyDetails:boolean=false;
  EducationalDetails:boolean=false;
  selected = 'option1';
  selected1 = 'none';
  selected2 = 'none';
  ProfessionalDetails:boolean=false;
  constructor(private fb: FormBuilder,private snakebar:UtilityServiceService) {


    this.form = this.fb.group({
      FirstName: ["", Validators.pattern('[a-zA-Z]{2,}')],
      LastName: ["", Validators.pattern('[a-zA-Z]{2,}')],
      MiddleName:["", Validators.pattern('[a-zA-Z]{2,}')],
      Interest:[""],
      MotherName:["",],
      FatherName:[""],
      Hobbies:[""],
      Strength:[""],
      Weakness:[""],
      MotherDOB:[""],
      FatherDOB:[""],
      FatherOccupation:[""],
      MotherOccupation:[""],
      HQPercentage:[""],
      YOPHQ:[""],
      YOP12:[""],
      PR12:[""],
      fiels12:[""],
      fiels10:[""],
      Per10:[""]

    })  

  
   }
   familyTrue(){
     if(this.form.valid){
     this.familyDetails = true;
     }
     else{
       this.snakebar.snakeBarMethod("Plese Enter Valid Fields")
     }
   // this.familyDetails = true;
   }
   EducationTrue(){
      if(this.form.valid){
      this.EducationalDetails = true;
     }
     else{
       this.snakebar.snakeBarMethod("Plese Enter Valid Fields")
     }
  //  this.EducationalDetails = true;
  }

  professionalTrue(){
     if(this.form.valid){
     this.ProfessionalDetails=true;
     }
     else{
       this.snakebar.snakeBarMethod("Plese Enter Valid Fields")
     }
    //this.ProfessionalDetails=true;
  }

  ngOnInit(): void {
  }

}
