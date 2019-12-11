import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {
  
  today = new Date();

  @ViewChildren('currentDate') currentDate:QueryList<ElementRef>;

  constructor() { }
  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('Came inside the after view init method ....')
   /* setInterval(()=>{
      this.currentDate.toArray().forEach((n)=> n.nativeElement.textContent = new Date());
    }, 1000);
   */
  }

}
