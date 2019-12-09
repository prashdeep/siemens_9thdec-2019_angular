import {User} from './User';

class CorporateUser implements User{

    firstname:string;
   lastname: string;
    city:string;
    state:string;

    setName(){

    }
}

let user:User = new CorporateUser();