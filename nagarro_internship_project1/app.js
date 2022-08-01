const express =  require('express');
const app = express();
const path =  require('path');
const session =  require('express-session');

const authRoutes = require('./routes/authRoutes');



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/twitter')
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})



app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname , '/public')));


app.use(session({
    secret: 'we need a better secret',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))

//using the routes here
app.use(authRoutes);


app.get('/',(req,res)=>{
    // res.send("welcome to twitter clone");
    res.render('home');
})


app.listen(3000,()=>{
    console.log("server running on 3000");
})