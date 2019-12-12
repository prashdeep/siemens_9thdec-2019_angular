import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDetails: string;

  constructor(private courseService:CourseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.courseDetails = this.courseService.getCourseDetails(+courseId);
  }

}
