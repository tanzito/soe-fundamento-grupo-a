import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository } from '../../domain/repository/auth.repository';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: FormControl;
  password: FormControl;

  constructor(private router: Router, @Inject('AUTH_REPOSITORY') private readonly authRepository: AuthRepository) {
    this.email = new FormControl();
    this.password = new FormControl();
  }

  async login() {
    this.authRepository.login({
      password: this.password.value,
      email: this.email.value
    }).then(seller => {
      localStorage.setItem('seller', JSON.stringify(seller));
      this.router.navigate(['/home']);
    }).catch(() => alert('Email o Password incorrecto.'));

  }
}
