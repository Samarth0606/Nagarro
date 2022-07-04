// map method
// let a = [1,2,3,4,5,6,7,8,9];


// function square(num){
//     return num*num;
// }

// function cube(num){
//     return num*num*num;
// }

// function root(num){
//     return Math.sqrt(num);
// }

// let b = a.map(square);
// let c = a.map(cube);
// let d = b.map(root);


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// filter method

// let a = [1,2,3,4,5,6,7,8,9];

// function isOdd(num){
//     if(num % 2 == 0){
//         return false;
//     }
//     return true;
// }

// let output = a.filter(isOdd);
// console.log(a);
// console.log(output);


let menu = ["paneer","chicken tadka","egg burji","egg omlette","chicken biryni","veg rice","chicken chilli","garlic bread"];

function isVeg(food){
    if(food.indexOf('chicken')!=-1 || food.indexOf('egg')!=-1 ){
        return false;
    }
    return true;

}


let vegmenu = menu.filter(isVeg);
console.log(vegmenu);