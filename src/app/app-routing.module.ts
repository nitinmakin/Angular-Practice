import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./Components/register/register.component";
import { LoginComponent } from "./Components/login/login.component";
import { UserDashboardComponent } from "./Components/user-dashboard/user-dashboard.component";
import { ToolBarComponent } from "./Components/tool-bar/tool-bar.component";
import { DisplayProductsComponent } from './Components/display-products/display-products.component';
import { CartComponent } from './Components/cart/cart.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AdminPanalComponent } from './Components/admin-panal/admin-panal.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';

const routes: Routes = [
{
  path:'register', component:RegisterComponent
},
{
  path:'login', component:LoginComponent
},
{
  path:'info', component:UserDashboardComponent
},
{
  path:'toolbar', component:ToolBarComponent
},
{
  path:'dashboard', component:DashBoardComponent
},
{
  path:'',redirectTo:'/login',pathMatch:'full'
},
{
  path:'displayproducts',component:DisplayProductsComponent
},
{
  path:'cart',component:CartComponent
},
{
  path:'productpage',component:AddProductComponent
},
{
  path:'adminpanal',component:AdminPanalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
