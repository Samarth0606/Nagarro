// set timeout

// console.log("start")
// setTimeout(()=>{
//     console.log("call back")
// },3000)
// console.log("end")
// VM1079:1 start
// VM1079:5 end
// undefined
// VM1079:3 call back
// console.log("start")
// setTimeout(()=>{
//     console.log("call back")
// },5000)
// console.log("end")
// VM1133:1 start
// VM1133:5 end
// undefined
// VM1133:3 call back

// set interval & clear interval (web api superpowers)

let id = setInterval(function fun(){
    console.log("interval")
} ,1000 )
setTimeout(()=>{
    clearInterval(id);
},4000)
