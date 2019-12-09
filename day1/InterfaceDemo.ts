import { User } from "./User";

export function printFirstName({ firstname = "Default"}){
    console.log(`${firstname}`)
}

const venkat:User = {firstname: "Venkat", lastname:"Kumar"};
printFirstName(venkat);

const course = {firstname: "Angular"}
printFirstName(course);

printFirstName(null);