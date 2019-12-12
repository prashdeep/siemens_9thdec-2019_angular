import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDetails: Course;

  constructor(private courseService:CourseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
 
   this.courseService
    .getCourseDetails(+courseId)
    .subscribe(courseDetails => this.courseDetails = courseDetails);
  }

}
