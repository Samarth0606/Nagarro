let btn = document.querySelector('button');
let h1 = document.querySelector('h2');
// console.dir(btn);
// btn.onclick = function fun(e){
//     console.log(e);
//     console.log(e.target);
//     console.log("please dont click me again");
// }

// function shout(){
//     console.log("shout")
    
// }
// function scream(){
//     console.log("scream")

// }

// drawback to multiple functions
// btn.onclick = scream;
// btn.onclick = shout;


// overcome the drawback --- > event listeners

// btn.addEventListener('click', shout)
// btn.addEventListener('click', scream)


// mouse events
// btn.addEventListener('mouseenter' , ()=>{
//     btn.style.color= "yellow"
// })

// btn.addEventListener('mouseleave' , ()=>{
//     btn.style.color= ""
// })


// h1.addEventListener('dblclick' , ()=>{
//     h1.style.color= "red"
// })


// keyboard events

let inp = document.querySelector('input')

inp.addEventListener('keypress' , (e)=>{
    console.log(e);
    // console.log(e.target);
    if(e.which == 102){
        console.log("entered f key");
        inp.value = ""
    }
    else{
        
        console.log("i have pressed some of the key");
    }

})


