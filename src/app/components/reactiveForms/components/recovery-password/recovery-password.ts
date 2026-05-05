import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recovery-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './recovery-password.html',
  styleUrl: './recovery-password.css',
})
export class RecoveryPassword {
  public email = '';

  constructor(private service: AuthService) {}

  recover() {
    if (!this.email) {
      alert('გთხოვთ შეიყვანეთ ელფოსტა');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      alert('გთხოვთ შეიყვანეთ სწორი ელფოსტის ფორმატი');
      return;
    }

    this.service.recoveryPassword(this.email).subscribe({
      next: (res) => {
        alert('წარმატებით გაიგზავნა აღდგენის ლინკი გთხოვთ შეამოწმეთ ელ-ფოსტა');
        console.log(res);
      },
      error: (err) => {
        console.error('კაროჩე ერრორი:', err);
        alert('დაფიქსირდა შეცდომა, სცადე თავიდან');
      },
    });
  }
}
