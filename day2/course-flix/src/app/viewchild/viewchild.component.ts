import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements AfterViewInit {
  
  @ViewChild('test', {static:false}) test:ElementRef;
  
  ngOnInit(): void {
    console.log(`The value inside the on Init method is ${this.test}`)
  }

  ngAfterViewInit(): void {
    console.log(`inside the afterviewinit life cycle, the value is`);
   /* setInterval(() => {
      this.test.nativeElement.textContent = 'After loading the view content..'
    }, 1000);
    */
  }

  ngAfterContentChecked(): void {
    console.log("This will be invoked every time the contet is changed...")
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log(`Do check called.`)
  }
}
