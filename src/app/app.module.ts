import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';

//material
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { CrudComponent } from './views/crud/crud.component';
import { ProfileComponent } from './views/profile/profile.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FooterComponent } from './layout/footer/footer.component';
import { RotationDirective } from './shared/directives/rotation.directive';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    PrivateHeaderComponent,
    GaleriaComponent,
    CrudComponent,
    ProfileComponent,
    FooterComponent,
    RotationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
