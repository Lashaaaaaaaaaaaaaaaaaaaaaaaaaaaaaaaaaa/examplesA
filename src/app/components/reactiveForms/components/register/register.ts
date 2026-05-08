import { Component, StreamingResourceOptions } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  public selected = '';

  constructor(private authService: AuthService) {}

  public formInfo: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
    zipcode: new FormControl(),
    gender: new FormControl(),
    avatar: new FormControl(),
  });

  register() {
    this.authService.signUp(this.formInfo.value).subscribe((data: any) => {
      console.log(data);
    });
  }
}
