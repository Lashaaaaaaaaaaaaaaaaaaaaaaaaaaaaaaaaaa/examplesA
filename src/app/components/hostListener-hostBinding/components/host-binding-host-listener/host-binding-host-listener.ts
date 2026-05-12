import { Component } from '@angular/core';
import { ListenerHost } from '../listener-host/listener-host';
import { BindingHost } from '../binding-host/binding-host';

@Component({
  selector: 'app-host-binding-host-listener',
  imports: [ListenerHost, BindingHost],
  templateUrl: './host-binding-host-listener.html',
  styleUrl: './host-binding-host-listener.css',
})
export class HostBindingHostListener {}
