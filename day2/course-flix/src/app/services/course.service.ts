import { Injectable } from '@angular/core';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourseDetails(courseId: number): string {
    return `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sed quas repellat totam voluptate. Assumenda, unde.
            Sed quas repellat totam voluptate. Assumenda, unde.
            Sed quas repellat totam voluptate. Assumenda, unde.
            Sed quas repellat totam voluptate. Assumenda, unde.
            Sed quas repellat totam voluptate. Assumenda, unde.`
  }
  
  
  courses; 

  constructor() { 
  
    this.courses = [
      {
  
          "id":1,
          "name":"Angular",
          "image":'../../assets/angular.jpg',
          "price":8000,
          "offer":true,
          "start_date":"2019-10-12",
          "desc":"Angular 8 version",
          "rating":4.53543567,
          "students":20
      },
      {
          "id":2,
          "name":"React",
          "image":'../../assets/angular.jpg',
          "price":10000,
          "rating":3.88354357,
          "start_date":"2019-10-12",
          "offer":false,
          "desc":"React 16.8 version",
          "students":10
      },
      {
          "id":3,
          "name":"Java Spring Boot",
          "price":15000,
          "image":'../../assets/angular.jpg',
          "offer":true,
          "rating":4.34563,
          "start_date":"2019-10-12",
          "desc":"Java Spring Boot 2.X version",
          "students":15
      },
      {
          "id":4,
          "name":"Java MicroServices",
          "image":'../../assets/angular.jpg',
          "price":20000,
          "rating":5.0,
          "start_date":"2019-10-12",
          "offer":false,
          "desc":"Java Microservices",
          "students":10
      }
  ]
  }

  loadAllCourses():any[]{
    return this.courses;
  }

  addCourse(course:Course) {
    this.courses.push(course);
  }

}
