export class Course {

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

    public get price():number{
        return this._price;
    }

    public set price(price:number) {
        this._price = price;
    }

    public printDesc():string {
        return `Course name: ${this._name}  price: ${this._price}`;
    }
}

export const printCourseDetails = function (course:Course):string {
    return `Course Name: ${course.name} Price: ${course.price}`
}






