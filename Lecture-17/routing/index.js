const express = require('express');
const app  = express();



app.get('/cat' , (req,res)=>{
    res.send("hi i am a cat meoow");
})

app.get('/dog' , (req,res)=>{
    res.send("hi i am a dog woof woof ");
})


//always enter this route towards the end
app.get('*' ,(req,res)=>{
    res.send("plz enter a valid route");
} )

app.post('/hi',(req,res)=>{
    res.send("hiiii");
})


app.listen(3000,()=>{
    console.log("server running");
})