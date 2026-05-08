import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../reactiveForms/services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private service: AuthService) {}

  isloggedIn() {
    return sessionStorage.getItem('user') != null;
  }

  signout(): void {
    this.service.signOut();
    alert('You have been logged out');
  }
}
