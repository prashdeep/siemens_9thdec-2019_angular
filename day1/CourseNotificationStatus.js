"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseEnrollmentStatus;
(function (CourseEnrollmentStatus) {
    CourseEnrollmentStatus[CourseEnrollmentStatus["ENQUIRED"] = 0] = "ENQUIRED";
    CourseEnrollmentStatus[CourseEnrollmentStatus["REGISTERED"] = 1] = "REGISTERED";
    CourseEnrollmentStatus[CourseEnrollmentStatus["AWAITING_REPLY"] = 2] = "AWAITING_REPLY";
    CourseEnrollmentStatus[CourseEnrollmentStatus["PENDING"] = 3] = "PENDING";
    CourseEnrollmentStatus[CourseEnrollmentStatus["CANCELLED"] = 4] = "CANCELLED";
    CourseEnrollmentStatus[CourseEnrollmentStatus["POSTPONE"] = 5] = "POSTPONE";
})(CourseEnrollmentStatus = exports.CourseEnrollmentStatus || (exports.CourseEnrollmentStatus = {}));
console.log(CourseEnrollmentStatus.PENDING.toString());
