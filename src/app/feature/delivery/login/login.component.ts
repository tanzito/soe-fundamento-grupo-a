import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository } from '../../domain/repository/auth.repository';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, @Inject('AUTH_REPOSITORY') private readonly authRepository: AuthRepository) {

  }

  login() {
    this.authRepository.login().subscribe(x => {
      if (x) {
        this.router.navigate(['/home']);
      }

    });
  }
}
