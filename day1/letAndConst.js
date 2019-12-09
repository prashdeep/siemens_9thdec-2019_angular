
const functionWithVarKeyword = function (){
    console.log('the value of index before is '+index );
   // console.log('the value of i is '+ i);
    for(let index = 0; index < 10; index++){
        console.log(index);
    }

    console.log('The value of index after is '+ index);
}

const str = {name:'Kiran'};

//mutate the object.
str.name = 'Vikas';

//cannot reassing the value of const
//str = {};