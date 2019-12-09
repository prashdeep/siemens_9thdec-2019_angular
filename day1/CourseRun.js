"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course_1 = require("./Course");
var course = new Course_1.Course(1, "Angular 8", 15000);
var course2 = new Course_1.Course(2, "Angular 7", 10000);
var course3 = new Course_1.Course(3, "Angular 9", 20000, "Limited offer");
course.name = "Angular 9";
console.log(course2.name);
Course_1.printCourseDetails(course);
