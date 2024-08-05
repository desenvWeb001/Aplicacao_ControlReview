import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[uppercase]'
})
export class TextFormaDirective {

  constructor(private el: ElementRef) {  
    this.el.nativeElement.value.toUpperCase()
  }

}


