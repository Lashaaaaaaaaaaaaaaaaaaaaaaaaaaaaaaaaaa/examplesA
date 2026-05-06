import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  public name = 'flacko';
  public email = 'flacko@gmail.com';
  public password = 'pussyboy';

  public invalidPassword = false;

  public onSubmit(myForm: NgForm) {
    console.log(myForm.value);

    if (myForm.value.password && myForm.value.password.length < 5) {
      this.invalidPassword = true;
    }
  }

  public setDefault(): void {
    this.name = 'lord';
    this.email = 'lord@gmail.com';
  }

  public reset(myForm: NgForm) {
    myForm.reset();
  }
}
