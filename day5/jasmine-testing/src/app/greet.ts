export const greet = function(message:string, firstname:string, lastname? : string ){
    lastname = lastname || '';
    return `${message} - ${firstname} , ${lastname}`;
}