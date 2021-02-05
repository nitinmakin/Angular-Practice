import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityServiceService } from "../../Service/utility-service.service";


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(private Route:Router,private snakebar:UtilityServiceService) { }



  logout(){
    this.Route.navigate(['/login'])
  }
  ngOnInit(): void {
  }

}
