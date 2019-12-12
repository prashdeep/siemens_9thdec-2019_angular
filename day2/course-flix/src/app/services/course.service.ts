import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  API_URL = "http://my-json-server.typicode.com/prashdeep/courseflix/courses";

  getCourseDetails(courseId: number): Observable<any> {
    return this.httpClient.get<any>(this.API_URL+"/"+courseId);
  }
  
  
  courses; 

  constructor(private httpClient: HttpClient) {}
  
  

  loadAllCourses():Observable<any[]>{
    return this.httpClient.get<any[]>(this.API_URL);
  }

  addCourse(course:Course):Observable<any> {
    return this.httpClient.post<any>(this.API_URL, JSON.stringify(course))

  }

}
