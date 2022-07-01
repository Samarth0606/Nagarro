
var x = 1;
console.log(x);
function a(){
    x=10;
    console.log(x);
}

a();

// -----------------------------------

let x = 10;
console.log(x);
function a(){
    x=100;
    console.log(x);
}
a();
x=1000;

// -----------------------------------

const x = 100;
console.log(x);
function a(){
    x=10;
    console.log(x);
}
a();

// -----------------------------------

function a(){
    console.log(x);
}
a();
var x=2   

// -----------------------------------

let x;
function b(){
    console.log(x);
}
b();
x=2;
// -----------------------------------

function a(){
    console.log(x);
}
a();
let x=2 


// -----------------------------------

var a=1;
let b=2;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);

// ----------------------------------
 

 function x(){
     var a =7;
     function y(){
         console.log(a);
     }
     return y;
 }
 var z =  x();
 console.log(z);
 z();

// ----------------------------------


function x(){
    for(var i=0;i<6;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}
x();

// ----------------------------------


function x(){
    for(var i=0;i<6;i++){
        function close(i){
                setTimeout(function(){
                    console.log(i);
                },1000*i)
        }   
        close(i);
        console.log("interview");
    }
}
x();

// -----------------------------------

const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}

// question1: make copy of the object and manipulate values inthe new copied object
// question2: print all the properties using appropriate for loop 





// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? 
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous 
// 10. for each loop



