let nameVar = 'Zach';
let nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';

console.log('nameLet', nameLet);

const nameConst = 'Frank'; 
console.log('nameConst', nameConst);
// Block Level Scoping 


let fullName = 'Zach Frame';

if (fullName){
    let firstName = fullName.split(' ')[0]
    console.log(firstName)
}

