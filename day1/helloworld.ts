let greetMsg:string;
let numbers:number;
let flag: boolean;
let value: any;
let number: number[];
value = "";
value =false; 


let greet =  (firstname:string, lastname:string):void => {
    return  (message:string ) => {
        console.log(message + firstname + lastname);
    }
}

greet("Vinay", "Kumar") ("Welcome !! ");
