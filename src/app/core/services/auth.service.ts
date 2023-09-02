import { Injectable } from '@angular/core';
import { Observable, Subject, delay, of } from 'rxjs';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user.model';

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
      sessionStorage.setItem('logged', 'isLogged');
      return of(true).pipe( delay(2000));
    } else {
      sessionStorage.setItem('logged', 'isNotlogged');
      return of(false).pipe( delay(2000));
    }
  }
  
  isLogged () : boolean {
    return this.storageService.get('user') ? true : false
  }

  getUsername () : string {
    if (this.storageService.get('user')){
      return this.storageService.get('user').username;
    }  else {
      return '';
    }
  }

  logout() : void {
    this.storageService.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  private user = new Subject<User>();
  public userEmitter = this.user.asObservable();
  userEmitChange(user : User) {
    this.user.next(user);
  }; 
}
