
function addAge1(age) {
    if(typeof age === 'number') {
        return age + 1;    
    } else {
        throw 'ERROR!!';
    }
    
}

let age1 = addAge1(30);

age1 = addAge1('30');

age1 = 10;
age1 = [];
age1 = false;
age1 = {};


console.log(age1);