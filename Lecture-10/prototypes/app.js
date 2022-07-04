// let arr = [1,2,3,4,5,6];
// console.log(arr);
// arr.pop();
// arr.push("mango");
// console.log(arr);


// const person1 = {
//     name:"kartik",
//     age:28,
//     sayHello: function(){
//         console.log("hello from kartik to everyone");
//     }
// }

// const person2 = {
//     name:"kartikkkk",
//     age:2888,
//     sayHello: function(){
//         console.log("hello from kartik to everyoneeeeee");
//     }
// }

// let p1 = Object.create(person1);
// let p2 = Object.create(p1);
// p1.sayHello();

// p1.hasOwnProperty('name')
// false
// person1.hasOwnProperty('name')
// true
// p2.hasOwnProperty('name')
// false

// dender proto
// p1.__proto__ == person1
// true
// p1.__proto__ === person1
// true
// p1.__proto__ === p1
// false
// p2.__proto__ === p1
// true
// p2.__proto__ === person1
// false
// person1.__proto__ === Object.prototype
// true
// Object.prototype.__proto__
// null


// let str = "myclass is learning quickly";
// str.__proto__ == String.prototype
// true
// str.__proto__ === String.prototype
// true
// String.prototype.__proto__ == Object.prototype
// true

function fun(){
    console.log("1"); 
    console.log("2"); 
    console.log("3"); 
    function innerfun(){
        let x=10;
        console.log(x);
    }
    return innerfun;
      
}

let iff = fun();
iff();