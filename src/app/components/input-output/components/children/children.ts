import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  imports: [],
  templateUrl: './children.html',
  styleUrl: './children.css',
})
export class Children {
  @Input() message: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(' - whatsap homie');
  }
}
