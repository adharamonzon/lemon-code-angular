import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { User } from 'src/app/shared/model/user.model';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor ( private fb : FormBuilder,
                private router: Router,
                private authService: AuthService,
                private storageService: StorageService
  ) {}

  loginErr = '';
  isLogged = 'false';
  user? : User;

  form = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {
    if (this.form.value.name === 'master@lemoncode.net' && this.form.value.password === '12345678') {
      this.user = {
        username : this.form.value.name,
        password : this.form.value.password
      }
      this.storageService.set('user', this.user);
      this.isLogged = 'true';
      this.authService.login(this.form.value.name, this.form.value.password).subscribe({
        next: (resp) => {
          if (resp === true) {
            this.router.navigateByUrl('/dashboard')
          }
        }
      });
    } else {
      this.isLogged = 'false';
      this.loginErr = 'Usuario o contraseña inválidos'
    }
  }
}
