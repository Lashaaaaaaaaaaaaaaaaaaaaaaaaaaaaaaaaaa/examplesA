import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'aqua';
    this.el.nativeElement.style.transition = '0.4s';
    this.el.nativeElement.style.padding = '6px';
    this.el.nativeElement.style.borderRadius = '9px';
    this.el.nativeElement.style.boxShadow = '0 0 20px 0 blueviolet';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'rgb(194, 0, 48)';
    this.el.nativeElement.style.transition = '0.5s';
    this.el.nativeElement.style.padding = '3px';
    this.el.nativeElement.style.boxShadow = '0 0 20px 0 rgb(119, 0, 255)';
  }
}
