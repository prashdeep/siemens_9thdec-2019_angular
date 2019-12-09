var Config = (function(){
    var firstname = "";
    var lastname = "";
    let REST_API = "https://backend.api.com/v1/users";

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
        getURI:function(){
            return REST_API;
        },

        setLastName:function(lname){
            lastname = lname;
        }
    }

    return innerObj;
}());

Config.setFirstName("kamesh");
console.log(Config.getFirstName());
console.log(Config.getFirstName());
console.log(Config.getFirstName());
console.log(Config.getFirstName());
console.log(Config.getURI());