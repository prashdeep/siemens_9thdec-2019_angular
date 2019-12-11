import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  courses; 

  constructor() { 
  
    this.courses = [
      {
  
          "id":1,
          "name":"Angular",
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
          "offer":true,
          "rating":4.34563,
          "start_date":"2019-10-12",
          "desc":"Java Spring Boot 2.X version",
          "students":15
      },
      {
          "id":4,
          "name":"Java MicroServices",
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

}
