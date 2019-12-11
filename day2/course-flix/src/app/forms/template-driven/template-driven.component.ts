import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }

  submitCourse({coursename, price}){
    const course = {};
    course.name = coursename;
    course.price = price;
    this.courseService.addCourse(course);
  }

}
