import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //logged user
  public isLoggedUser: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { 
  }
}
