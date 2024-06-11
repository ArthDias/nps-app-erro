import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.email && this.password) {
      const isAuthenticated = this.authService.login(this.email, this.password);
      if (!isAuthenticated) {
        this.errorMessage = 'Invalid email or password';
      }
    }
  }
}
