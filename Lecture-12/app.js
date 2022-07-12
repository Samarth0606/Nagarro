// console.dir(document)

// document.querySelectorAll('ul li')
// NodeList(5) [li.aditya, li.aditya, li, li.aditya, li]
// let list = document.querySelectorAll('ul li')
// undefined
// list
// NodeList(5) [li.aditya, li.aditya, li, li.aditya, li]
// list[0]
// <li class=​"aditya" style=​"border:​ 2px solid black;​">​…​</li>​
// let p = document.querySelectorAll('.aditya')
// undefined
// p.style.color = "green"
// VM5810:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:15
// (anonymous) @ VM5810:1
// for(let i of p){
//     i.style.color = "green"
// }

// code to toggle
// let img = document.querySelector('img');

// let boole = false;
// setInterval(()=>{
//     if(boole){
//         img.setAttribute('src','https://images.unsplash.com/photo-1649859397840-e90c65756084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1651&q=80')
//     }
//     else{
//         img.setAttribute('src' , 'https://images.unsplash.com/photo-1657247882823-955a21e2f18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60')
        
//     }
//     boole = ! boole;
// },2000);



// adding removing toggling and checking th class existance


// h1.setAttribute('class','second' 'first')
// VM706:1 Uncaught SyntaxError: missing ) after argument list
// h1.setAttribute('class','second first')
// undefined
// h1.classList
// DOMTokenList(2) ['second', 'first', value: 'second first']
// h1.classList.toggle('tog')
// true
// h1.classList.toggle('tog')
// false
// h1.classList.toggle('tog')
// true
// h1.classList.toggle('tog')
// false
// h1.classList.toggle('tog') 
// true
// h1.classList.contains('first')
// true
// h1.classList.contains('second')
// true
// h1.classList.contains('third')
// false