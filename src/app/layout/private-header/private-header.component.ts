import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit{
  isAuthenticated = true;
  username = '';
  constructor(private authService : AuthService  ) {}

  ngOnInit(): void {
      this.username = this.authService.getUsername()
  }
  logout() {
    this.authService.logout()
  }
  
}
