//assigned a function to a variable 
var ages = [ 22, 11, 10, 44, 56];
//function as expression
var filterAges = function () {
    for (let index = 0; index < ages.length; index++) {
    if (ages[index] > 20){
                console.log (ages[index]);
            }
        }
}

// named function 
function filterAges1() {
    for (let index = 0; index < ages.length; index++) {
    if (ages[index] > 20){
                console.log (ages[index]);
            }
        }
}

var filterAgesFunc = function (filetFun){
    
  for (let index = 0; index < ages.length; index++) {
        if (filetFun(ages[index])) {
            console.log (ages[index]);
        }
  }
}
   

var filterFunAgeGt40 = age => age > 40;

var filterFunAgeLt40 = age => age < 40;

var filterFunAgeGT20AndLt40 =  age => (age > 20 && age < 40);



filterAgesFunc(filterFunAgeLt40);

filterAgesFunc( age =>  age  === 18)

//returning a function

var returnFunction = function (firstname, lastname){
   
    var greetFunc = function (greetMsg){
        console.log(greetMsg +firstname + " "+ lastname);
    }
    return greetFunc;
}

var result = returnFunction("Vikas", "Kumar");
result("Welcome !!");
