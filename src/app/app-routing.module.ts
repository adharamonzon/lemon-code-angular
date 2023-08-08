import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AboutComponent } from './views/about/about.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { CrudComponent } from './views/crud/crud.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent, data: { publicHeader: false, privateHeader: true} },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'profile', component: ProfileComponent },
  { path:'', pathMatch: 'full',  redirectTo:'/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
