import { Directive, ElementRef, HostBinding, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostBinding('style.backgroundColor')backgroundColor = 'transparent';

  @HostListener('mouseover') mouseover(eventData: Event) {
   this.elem.nativeElement.style.backgroundColor = 'blue';
 }


  ngOninit() {
    this.elem.nativeElement.style.backgroundColor = 'blue';
    // this.elem.nativeElement.style.color = 'white';
  }

}

