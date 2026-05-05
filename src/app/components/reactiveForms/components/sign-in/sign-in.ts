import { Component, inject } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  router = inject(Router);
  constructor(private service: AuthService) {}

  public loginFormInfo: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  signIn() {
    this.service.signIn(this.loginFormInfo.value).subscribe((data: any) => {
      console.log();
      sessionStorage.setItem('user', data.access_token);
      alert('success');
      this.router.navigate(['profile']);
    });
  }
}
