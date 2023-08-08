import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent {
  isAuthenticated = true;

  constructor(private authService : AuthService  ) {}

  logout() {
    this.authService.logout()
  }
  
}
