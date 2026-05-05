import { Component } from '@angular/core';
import { User } from '../modals/user.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from '../directives/custom-directive';
import { CustomPipePipe } from '../pipes/custom-pipe-pipe';

@Component({
  selector: 'app-directive-pipes',
  imports: [CommonModule, FormsModule, CustomDirective, CustomPipePipe],
  templateUrl: './directive-pipes.html',
  styleUrl: './directive-pipes.css',
})
export class DirectivePipes {
  public usersArray: User[] = [
    { name: 'flacko', surname: 'lord', age: 22, student: false },
    { name: 'mariami', surname: 'princess', age: 19, student: false },
    { name: 'lolita', surname: 'queen', age: 20, student: true },
    { name: 'pretty', surname: 'baby', age: 17, student: false },
  ];

  public inputText: string = '';

  public text: string = 'flacko';

  amount = 999.99;
  company = 'acme corporation';
  purchasedOn = '2026-05-05';
}
