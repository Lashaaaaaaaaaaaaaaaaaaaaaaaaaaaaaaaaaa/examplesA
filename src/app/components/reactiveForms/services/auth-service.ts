import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public http = inject(HttpClient);
  public router = inject(Router);

  signUp(info: any) {
    return this.http.post('https://api.everrest.educata.dev/auth/sign_up', info);
  }

  signIn(info: any) {
    return this.http.post('https://api.everrest.educata.dev/auth/sign_in', info);
  }

  getUser() {
    const token = sessionStorage.getItem('user');

    return this.http.get('https://api.everrest.educata.dev/auth', {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  recoveryPassword(email: string): Observable<any> {
    const url = 'https://api.everrest.educata.dev/auth/recovery';
    const body = { email };
    return this.http.post(url, body);
  }

  signOut() {
    sessionStorage.removeItem('user');
    this.router.navigate(['viewEncapsulation']);
  }
}
