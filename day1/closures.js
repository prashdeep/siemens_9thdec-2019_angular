var User = (function(){
    var firstname = "";
    var lastname = "";

    console.log('should be called only once ');

    var innerObj = {

        getFirstName:function(){
            return firstname;
        },
        
        setFirstName:function(fname){
            firstname = fname;
        },
        getLastName:function(){
            return lastname;
        },

        setLastName:function(lname){
            lastname = lname;
        }
    }

    return innerObj;
}());

User.setFirstName("kamesh");
console.log(User.getFirstName());
console.log(User.getFirstName());
console.log(User.getFirstName());
console.log(User.getFirstName());