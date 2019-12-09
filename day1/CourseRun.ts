import { Course, printCourseDetails } from "./Course";


let course = new Course(1, "Angular 8", 15000);
let course2 = new Course(2, "Angular 7", 10000);
let course3 = new Course(3, "Angular 9", 20000 , "Limited offer");

course.name = "Angular 9";
console.log (course2.name);

printCourseDetails(course);
