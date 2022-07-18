async function data(){
    console.log("starting now 1");

    console.log("starting now 2");

    const res = await fetch('https://api.tvmaze.com/search/shows?q=girls')

    console.log("starting now 3");

    console.log("starting now 4");
     
    let data = await res.json();

    console.log("starting now 5");

    console.log(data);

    console.log("starting now 6");


}

console.log("start");
data();
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");

