const express = require('express');
const app = express();

// console.log(app);
app.use((req,res)=>{
    console.log('u made a use request')

    console.log(req);
    console.log(res);
})



app.listen(3000,()=>{
    console.log("server running");
})

