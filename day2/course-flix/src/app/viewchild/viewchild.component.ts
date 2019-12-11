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
    setTimeout(() => {
      this.test.nativeElement.textContent = 'After loading the view content..'
    }, 5000);
  }
}
