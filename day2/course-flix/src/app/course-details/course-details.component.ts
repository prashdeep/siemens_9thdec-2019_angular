import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDetails: any;

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseDetails = this.courseService.getCourseDetails(12);
  }

}
