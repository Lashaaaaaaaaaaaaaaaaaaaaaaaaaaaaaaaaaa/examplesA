import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-binding-host',
  imports: [],
  templateUrl: './binding-host.html',
  styleUrl: './binding-host.css',
})
export class BindingHost {
  public isActive: boolean = false;

  @HostBinding('class.active-card') get activeClass() {
    return this.isActive;
  }

  @HostBinding('style.borderColor') get borderColor() {
    return this.isActive ? 'blueviolet' : 'gold';
  }

  @HostBinding('style.color') get color() {
    return this.pss ? 'aqua' : 'red';
  }

  pss = false;

  toggleActive() {
    this.isActive = !this.isActive;
    this.pss = !this.pss;
  }

  @Input() messageFromHostBinding: string = '';
}
