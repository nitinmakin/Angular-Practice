import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.scss']
})
export class ConformationComponent implements OnInit {

  constructor() { }
termsCondition:boolean=false;



termsConditionTrue(){
  this.termsCondition=!this.termsCondition;
}
  ngOnInit(): void {
  }

}
