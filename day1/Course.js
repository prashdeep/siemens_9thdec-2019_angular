class Course {
    constructor(_id, _name, _price, _desc) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    printDesc() {
        return `Course name: ${this._name}  price: ${this._price}`;
    }
}
let course = new Course(1, "Angular 8", 15000);
let course2 = new Course(2, "Angular 7", 10000);
course.name = "Angular 9";
console.log(course2.name);
