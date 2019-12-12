import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[phoneFormat]'
})
export class PhoneFormatDirective {

  @Input('phoneFormat') format;
  

  constructor(private element: ElementRef) {
    console.log ('Inside the Phone format directive')
   }
   
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     console.log('test ..'+this.format)
   }

   @HostListener("blur")
   formatPhoneNumber(){
     console.log('The value of format is '+ this.format);
    let phoneNumberEntered:string = this.element.nativeElement.value;
     if (!phoneNumberEntered.startsWith("+91")){
      this.element.nativeElement.value = "+ 91 - "+ phoneNumberEntered;
    }
    
   }

}
