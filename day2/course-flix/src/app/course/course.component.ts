import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnChanges {

  ngOnChanges(changes:SimpleChanges): void {
    console.log('The changes variable....')
    console.log("Inside simple changes method of  child component");
    console.log (changes)
  }

  constructor() {
    console.log("Inside the constructor of child component");
  }
  
  ngOnInit() {
    console.log("Inside the init method of child component");
  }

  @Input() data;
  

}
