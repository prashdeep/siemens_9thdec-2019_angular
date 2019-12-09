let greetMsg;
let numbers;
let flag;
let value;
let number;
value = "";
value = false;
let greet = function (firstname, lastname) {
    return (message) => {
        console.log(message + firstname + lastname);
    };
};
greet("Vinay", "Kumar")("Welcome !! ");
