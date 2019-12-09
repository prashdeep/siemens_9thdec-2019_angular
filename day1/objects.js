let course = {
    id:12,
    name:'Angular',
    version:8,
    price: 10000.00,
    offer:false,
    batches:[
        {
            id: 12,
            no_of_students: 15,
            branch: "Bangalore"
        },
        {
            id: 13,
            no_of_students: 15,
            branch: "Chennai"
        }
    ]
}

course['desc'] = "A premium course on Angular";

course.printDesc = function(){
    return this.name + " price:: "+ this.price + " desc : "+this.desc;
}

/*
console.log (course);
console.log (course.name);
console.log(course.batches[0].id);
*/
course.printDesc();