import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityServiceService } from "../../Service/utility-service.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { ConformationComponent } from "../conformation/conformation.component";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  form: FormGroup;
  hide: boolean = true;
  familyDetails: boolean = false;
  familyDetailsTick: boolean = false;
  EducationalDetails: boolean = false;
  EducationalDetailsTick: boolean = false;
  Experiance: boolean = false;
  FresherSubmitButton = false;

  PersonalDetails: boolean = true;
  selected = 'option1';
  selected1 = 'none';
  selected2 = 'none';
  ProfessionalDetails: boolean = false;
  constructor(private fb: FormBuilder, private utilityService: UtilityServiceService,public dialog: MatDialog) {
    this.form = this.fb.group({
      FirstName: ["", Validators.pattern('[a-zA-Z]{2,}')],
      LastName: ["", Validators.pattern('[a-zA-Z]{2,}')],
      MiddleName: ["", Validators.pattern('[a-zA-Z]{2,}')],
      Interest: ["",Validators.minLength(4)],
      MotherName: ["",Validators.pattern('[a-zA-Z]{2,}')],
      FatherName: ["",Validators.pattern('[a-zA-Z]{2,}')],
      Hobbies: ["",Validators.minLength(4)],
      Strength: ["",Validators.minLength(4)],
      Weakness: ["",Validators.minLength(4)],
      MotherDOB: [""],
      FatherDOB: [""],
      FatherOccupation: ["",Validators.minLength(4)],
      MotherOccupation: ["",Validators.minLength(4)],
      HQPercentage: [""],
      YOPHQ: [""],
      YOP12: [""],
      PR12: [""],
      fiels12: [""],
      fiels10: [""],
      Per10: [""]
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ConformationComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  experianceTrue() {
    this.Experiance = true;
  }

  experianceFalse() {
    this.Experiance = false;
    this.FresherSubmitButton = true;
  }

  backToFresher(){
    this.Experiance = false;
    this.FresherSubmitButton = false;
  }

  private map = new Map<string, string[]>([
    ['B-Tech', ['ECE', 'CS', 'MECH', 'ELECTRICAL', 'IS', 'IT']],
    ['MBA', ['ABC', 'DEF', 'EFG', 'XYZ']],
    ['BCA', ['BCA1', 'BCA2', 'BCA3', 'BCA4']],
    ['M-TECH', ['M-TECH1', 'M-TECH2', 'M-TECH3', 'M-TECH4']],
    ['BBA', ['BBA1', 'BBA2', 'BBA3', 'BBA4']],
    ['MCA', ['MCA1', 'MCA2', 'MCA3', 'MCA4']],
  ])

  HighestQulification: any;
  Stream: any;
  get HighestQulifications(): string[] {
    return Array.from(this.map.keys());
  }
  get Streams(): string[] | undefined {
    return this.map.get(this.HighestQulification);
  }
email:string="nitinmakin124@gmail.com"

  familyTrue() {
     if(this.form.valid){
      this.familyDetails = true;
      this.familyDetailsTick=true;
      this.PersonalDetails= false;
     }
     else{
       this.utilityService.displaySnakeBar("Plese Fill All Mandatery Fields")
     }
    // this.familyDetails = true;
    // this.familyDetailsTick = true;
    // this.PersonalDetails = false;
  }
  EducationTrue() {
      if(this.form.valid){
        this.EducationalDetails = true;
        this.EducationalDetailsTick = true;
        this.familyDetails = false;
     }
     else{
       this.utilityService.displaySnakeBar("Plese Fill All Mandatery Fields")
     }
    // this.EducationalDetails = true;
    // this.EducationalDetailsTick = true;
    // this.familyDetails = false;
  }

  professionalTrue() {
     if(this.form.valid){
     this.ProfessionalDetails=true;
     this.ProfessionalDetails = true;
     this.EducationalDetails = false;
     }
     else{
       this.utilityService.displaySnakeBar("Plese Fill All Mandatery Fields")
     }
    // this.ProfessionalDetails = true;
    // this.EducationalDetails = false;

  }

  ngOnInit(): void {
  }

}
