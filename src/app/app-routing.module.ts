import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./Components/register/register.component";
import { LoginComponent } from "./Components/login/login.component";
import { UserDashboardComponent } from "./Components/user-dashboard/user-dashboard.component";

const routes: Routes = [
{
  path:'register', component:RegisterComponent
},
{
  path:'login', component:LoginComponent
},
{
  path:'dashboard', component:UserDashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
