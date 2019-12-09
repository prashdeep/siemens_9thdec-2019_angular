"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course(_id, _name, _price, _desc) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
    }
    Object.defineProperty(Course.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    Course.prototype.printDesc = function () {
        return "Course name: " + this._name + "  price: " + this._price;
    };
    return Course;
}());
exports.Course = Course;
exports.printCourseDetails = function (course) {
    return "Course Name: " + course.name + " Price: " + course.price;
};
