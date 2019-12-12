import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[phoneFormat]'
})
export class PhoneFormatDirective {

  constructor(private element: ElementRef) { }

}
