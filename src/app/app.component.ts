import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StorageService } from './core/services/storage.service';
import { User } from './shared/model/user.model';
import { AuthService } from './core/services/auth.service';
import { LoginComponent } from './views/login/login.component';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  publicHeader = false;
  user? : User;
    constructor( private loginService : LoginService) {
    
      this.loginService.isLoggedUser.subscribe({
        next: (resp: boolean) => {
          resp === true ? this.publicHeader = false : this.publicHeader = true
          }
      });
  }
}
