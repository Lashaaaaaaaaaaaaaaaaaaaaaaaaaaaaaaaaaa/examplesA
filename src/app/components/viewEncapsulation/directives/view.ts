import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appView]',
})
export class View {
  private isVisible = false;

  constructor(
    public el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('click')
  toggleView() {
    const div = this.el.nativeElement.nextElementSibling;

    this.isVisible = !this.isVisible;

    if (this.isVisible) {
      this.renderer.setStyle(div, 'maxHeight', '200px');
      this.renderer.setStyle(div, 'opacity', '1');
      this.renderer.setStyle(div, 'padding', '15px');
    } else {
      this.renderer.setStyle(div, 'maxHeight', '0');
      this.renderer.setStyle(div, 'opacity', '0');
      this.renderer.setStyle(div, 'padding', '0 15px');
    }
  }
}
