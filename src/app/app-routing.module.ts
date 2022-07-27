import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {PostComponent} from './pages/post/post.component';
import {CommentsComponent} from './pages/comments/comments.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './admin/main/main.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { AuthGuard } from './guard/auth.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';



const routes: Routes = [
  {
    path:'home',component:HomeComponent, title:"Home page"
  },

  {
    path:'admin',component:MainComponent, title:"Admin"

  },
  {
    path:'post',component:PostComponent, title:"Post"

  },
  {
    path:'comments',component:CommentsComponent, title:"Comments"

  },

  {
    path:'about',component:AboutComponent, title:"About"
  },
  {
    path:'dashboard',component:DashboardComponent, title:"Dashboard"
  },

  {
    path:'login', component: LoginComponent, title:"Login"
  },
  {
    path:'maintenance', component: MaintenanceComponent, title:"Maintenance"
  },
   
  {
    path:``, pathMatch:'full',redirectTo:'/home'
  },

  {
    path:'**', component:NotfoundComponent, title:"NotFound"
}


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule

  ]
})
export class AppRoutingModule { }
