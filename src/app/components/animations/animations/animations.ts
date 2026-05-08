import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Person } from './modals/person.interface';

enum Flacko {
  Lord = 'Flacko',
}

let jordy: Flacko = Flacko.Lord;

console.log(jordy);

@Component({
  selector: 'app-animations',
  imports: [],
  templateUrl: './animations.html',
  styleUrl: './animations.css',
  animations: [
    trigger('popState', [
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
export class Animations {
  public show: boolean = false;

  toggle() {
    this.show = !this.show;
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  people: Person[] = [new Person('Flacko', 22), new Person('Princess', 19)];
}
