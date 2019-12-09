class Course {

    constructor(private _id:number, 
                private _name:string, 
                private _price:number, 
                private _desc?:string){}

    public get id():number{
        return this._id;
    }

    public set id(id:number) {
        this._id = id;
    }

    public get name():string{
        return this._name;
    }

    public set name(name:string) {
        this._name = name;
    }

    public printDesc():string {
        return `Course name: ${this._name}  price: ${this._price}`;
    }
}

let course = new Course(1, "Angular 8", 15000);
let course2 = new Course(2, "Angular 7", 10000);

course.name = "Angular 9";
console.log (course2.name);




