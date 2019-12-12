import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import {Router } from '@angular/router';
import { Course } from 'src/app/model/Course';



@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private courseService:CourseService, private router:Router) { }

  ngOnInit() {

  }

  submitCourse({coursename, price}){
    const course:any={};
    course.name = coursename;
    course.price = price;
    this.courseService.addCourse(course);
    console.log('came inside the submit course of template driven forms ...')
    this.router.navigate(['']);
  }

}
