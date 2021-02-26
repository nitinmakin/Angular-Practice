import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.scss']
})
export class ConformationComponent implements OnInit {

  constructor(private route: Router) { }
termsCondition:boolean=false;


navigateLogin(){
  this.route.navigate(['/login'])
  }


termsConditionTrue(){
  this.termsCondition=!this.termsCondition;
}
  ngOnInit(): void {
  }

}
