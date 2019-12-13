export class User {
    constructor(private _firstname: string, private _lastname: string){}

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    set firstname(firstname){
        this._firstname = firstname;
    }

    set lastname(lastname){
        this._lastname = lastname;
    }
}