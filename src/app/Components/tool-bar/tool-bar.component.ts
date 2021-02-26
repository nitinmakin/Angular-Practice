import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityServiceService } from "../../Service/utility-service.service";


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(private Route:Router,private snakebar:UtilityServiceService) { }

@Input() email:string="";

  logout(){
    this.Route.navigate(['/login'])
  }
  navigateCart(){
    this.Route.navigate(['/cart']);
  }
  ngOnInit(): void {
  }

}
