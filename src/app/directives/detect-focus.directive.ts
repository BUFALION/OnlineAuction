import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFocusLabel]'
})
export class DetectFocusDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.renderer.addClass(this.elementRef.nativeElement.nextElementSibling, 'focus');
  }

  @HostListener('blur') onBlur() {
    if (!this.elementRef.nativeElement.value) {
      this.renderer.removeClass(this.elementRef.nativeElement.nextElementSibling, 'focus');
    }
  }
}

