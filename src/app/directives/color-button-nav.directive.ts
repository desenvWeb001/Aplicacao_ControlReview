import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorButtonNav]'
})
export class ColorButtonNavDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.color = 'red'
  }

  

}
