import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private storageService: StorageService,
               private router : Router
    ) { }
  username = '';

  login(username: string, password: string) : Observable<boolean> {
    if (username === 'master@lemoncode.net' && password === '12345678') {
      return of(true)
    } else {
      return of(false);
    }
  }
  
  isLogged () : boolean {
    return this.storageService.get('user') ? true : false
  }

  getUsername () : string {
    if (this.storageService.get('user')){
      return this.storageService.get('user');
    }  else {
      return '';
    }
  }

  logout() : void {
    this.storageService.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
