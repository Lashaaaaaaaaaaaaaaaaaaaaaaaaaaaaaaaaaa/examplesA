import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-biding',
  imports: [FormsModule],
  templateUrl: './biding.html',
  styleUrl: './biding.css',
})
export class Biding {
  public name: string = 'Flacko';

  public nnn: boolean = false;

  public text: boolean = true;

  public something: string = '';

  toggle() {
    this.nnn = !this.nnn;
  }

  colorChangeText() {
    this.text = !this.text;
  }

  public imageList: string[] = [
    'https://wallpapercave.com/wp/wp2276347.jpg',
    'https://i.pinimg.com/originals/02/25/8f/02258f71bae7d059c85990f93def4d0f.jpg',
    'https://wallpapers.com/images/hd/kayn-shadow-reaper-artwork-hti9cinmt7701j1l.jpg',
  ];

  public i: number = 0;

  previous() {
    if (this.i === 0) {
      this.i = this.imageList.length - 1;
    } else {
      this.i--;
    }
  }

  next() {
    if (this.i === this.imageList.length - 1) {
      this.i = 0;
    } else {
      this.i++;
    }
  }

  public click: boolean = false;
  public flacko: string = 'flacko';

  changeColor() {
    this.click = !this.click;
    this.flacko = 'lord';
  }

  changeText() {
    this.flacko = 'flacko';
  }
}
