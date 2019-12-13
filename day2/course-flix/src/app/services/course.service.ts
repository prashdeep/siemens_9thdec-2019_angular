import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  API_URL = "http://my-json-server.typicode.com/prashdeep/courseflix/courses"

  
  getCourseDetails(courseId: number): Observable<Course> {
    return this.httpClient.get<Course>(this.API_URL+"/"+courseId);
  }
  
  
  courses; 

  constructor(private httpClient: HttpClient) {}
  
  

  loadAllCourses():Observable<Course[]>{
    
    return this.httpClient.get<Course[]>(this.API_URL);
  }

  addCourse(course:Course):Observable<Course> {
    return this.httpClient.post<Course>(this.API_URL, JSON.stringify(course))

  }

}
