"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printFirstName(_a) {
    var firstname = _a.firstname;
    console.log("" + firstname);
}
exports.printFirstName = printFirstName;
var venkat = { firstname: "Venkat", lastname: "Kumar" };
printFirstName(venkat);
var course = { firstname: "Angular" };
printFirstName(course);
