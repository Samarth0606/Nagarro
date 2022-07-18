// const math = require('./index');

// destructuruing
const {pi , square , add} = require('./index');

// console.log(math);
// console.log(math.pi);
// console.log(math.square(7));
// console.log(math.add(2,3));
// console.log(math);
console.log(pi);
console.log(square(7));
console.log(add(2,3));


// spread operator
const car = {
    name:"bmw",
    color:"black",
    price:100000
}

const newCar = {
    ...car,  //spread opr
    maxspeed:300
}

