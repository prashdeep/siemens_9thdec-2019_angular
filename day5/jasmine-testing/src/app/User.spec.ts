import {User} from './User';

describe('Testing User class', ()=>{
    let user:User;
    beforeEach(()=>{
        user = new User("Vinay", "Kumar");
    });

    it('test the setter method', ()=>{
        user.firstname = "Akash"
        expect(user.firstname).toBe("Akash");
    });

    it('test the constructor method', ()=>{
        expect(user.firstname).toBe("Vinay");
        expect(user.lastname).toBe("Kumar");

    })
})