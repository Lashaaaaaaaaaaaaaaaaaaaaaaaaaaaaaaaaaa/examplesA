import { Component } from '@angular/core';
import { Children } from '../children/children';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-parent',
  imports: [Children],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  animations: [
    trigger('clickState', [
      state(
        'show',
        style({
          opacity: 1,
        }),
      ),
      state(
        'hide',
        style({
          opacity: 0,
        }),
      ),
      transition('show=>hide', animate('800ms ease-out')),
      transition('hide=>show', animate('1000ms ease-in')),
    ]),
  ],
})
export class Parent {
  public show: boolean = false;

  toggle() {
    this.show = !this.show;
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  childMessage: string = '';

  recieveMessage(msg: string) {
    this.childMessage = msg;
  }
}
