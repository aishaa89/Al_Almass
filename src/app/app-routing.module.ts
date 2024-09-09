import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Al Almas'},
  {path:'about',component:AboutComponent,title:'about'},
  {path:'brands',component:BrandsComponent,title:'Brands'},
  {path:'product',component:ProductComponent,title:'Brands'},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
 

 }
