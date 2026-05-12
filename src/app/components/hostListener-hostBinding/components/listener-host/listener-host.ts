import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-listener-host',
  imports: [],
  templateUrl: './listener-host.html',
  styleUrl: './listener-host.css',
})
export class ListenerHost {
  message = 'Whatsap Flacko';
  backgroundColor = ' #ad7300';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = '#5d00a0';
    this.message = 'Flacko !';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '#8d035a';
    this.message = 'Lord !';
  }
}
