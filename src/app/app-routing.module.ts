import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
/*   {path:'**',redirectTo:'/not-found',pathMatch:'full'} */
];

@NgModule({
  imports: [
     BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
