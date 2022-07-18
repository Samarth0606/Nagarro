// fetch
// fetch('https://api.tvmaze.com/search/shows?q=girls')
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

//  fetch('https://api.tvmaze.com/search/shows?q=girls')
//  .then((res)=>{
//     return res.json();
//  })
//  .then((data)=>{
//     // console.log(data);
//     for(let i in data){
//         console.log(data[i].score);
//     }
//  })
//  .catch((err)=>{
//     console.log(data);
//  })

// axios (3rd party library)

// axios.get('https://api.tvmaze.com/search/shows?q=girls')
// .then((mdata)=>{
//     let movie = mdata.data
//     for(let i of movie){
//         console.log(i.show.url);
//     }
// })
// .catch((err)=>{
//     console.log(err);
// })
