import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) : Observable<boolean> {
    if (username === 'curso' && password === 'angular') {
      return of(true)
    } else {
      return of(false);
    }
  }
}
