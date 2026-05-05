import { Component } from '@angular/core';
import { Register } from "../register/register";
import { SignIn } from "../sign-in/sign-in";
import { RecoveryPassword } from "../recovery-password/recovery-password";

@Component({
  selector: 'app-reactive-forms',
  imports: [Register, SignIn, RecoveryPassword],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

}
