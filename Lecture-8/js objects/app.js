// creating objects
// let person = {}
    
// undefined
// let person = {
//     name:"samarth",
//     age:24,
//     isAdult: true
// }
    
// undefined
// person
// {name: 'samarth', age: 24, isAdult: true}age: 24isAdult: truename: "samarth"[[Prototype]]: Object
// person[name]
// undefined
// person['name']
// 'samarth'
// person[age]
// VM563:1 Uncaught ReferenceError: age is not defined
//     at <anonymous>:1:8
// (anonymous) @ VM563:1
// person['age']
// 24


// objects are also refernece type

// let obj1 = {}

// undefined
// let obj1 = {
//     name:"abhishek",
// }

// undefined
// let obj2 = obj1 
// undefined
// obj1
// {name: 'abhishek'}
// obj2
// {name: 'abhishek'}
// obj2['name'] = "shruti"
// 'shruti'
// obj2
// {name: 'shruti'}
// obj1
// {name: 'shruti'}



// for( let i=0;i<=5;i++){
//     for (let j=0;j<=5;j++){
//         if(i==j){
//             break;
//         }
//         console.log(i,j);

//     }
// }
// output of bove quesiton
// 1 0
// app.js:56 2 0
// app.js:56 2 1
// app.js:56 3 0
// app.js:56 3 1
// app.js:56 3 2
// app.js:56 4 0
// app.js:56 4 1
// app.js:56 4 2
// app.js:56 4 3
// app.js:56 5 0
// app.js:56 5 1
// app.js:56 5 2
// app.js:56 5 3
// app.js:56 5 4


// for-of loops
// let arr = [1,2,3,4,5,6,7,"smaarth","nagaaro","12.45"];

// for(let i of arr){
//     console.log(i);
// }

// arr = [111,222,333,444]
// for(let i of arr){
//     console.log(i);
// }

// for in loops
// let person = {
//     name:"vaibav sharma",
//     age:22,
//     isAdult: true,
//     favcolor:"black"
// }

// for(let i in person){
//     // console.log(i);
//     console.log(`${i} --> ${person[i]}`)
// }