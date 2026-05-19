import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') mouseOver() {
    this.el.nativeElement.style.backgroundColor = 'gold';
    this.el.nativeElement.style.padding = '3px';
    this.el.nativeElement.style.transition = '0.5s';
    this.el.nativeElement.style.borderRadius = '10px';
  }

  @HostListener('mouseleave') mouseOut() {
    this.el.nativeElement.style.backgroundColor = 'blueviolet';
    this.el.nativeElement.style.padding = '1px';
    this.el.nativeElement.style.transition = '0.4s';
    this.el.nativeElement.style.borderRadius = '10px';
  }
}
