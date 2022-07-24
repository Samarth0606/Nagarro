const express = require('express');
const path = require('path');
const app  = express();

// app.get('/r/:random' , (req,res)=>{

//     let {random}= req.params;
//     res.send(`getting my ${random} route`);
// })

//templating engine or view engine
app.set('view engine' , 'ejs');

//bsically changing cwd into dirname
app.set('views' , path.join(__dirname , '/views'));

//public 
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/search' , (req,res)=>{
    console.log(req.query);
    res.send("query sended");
})

app.get('/home' , (req,res)=>{

    const random = Math.floor(Math.random()*100);
    res.render('home' , {random});
})


app.listen(3000,()=>{
    console.log("server is now running running");
})