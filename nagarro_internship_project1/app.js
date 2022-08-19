const express =  require('express');
const app = express();
const path =  require('path');
const session =  require('express-session');
const passport = require('passport');   
const localStrategy = require('passport-local');   
const User = require('./models/user');  
const flash = require('connect-flash');
const {isLoggedIn} = require('./middleware');

// Routes 

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profile');

// APIs
const postsApiRoute = require('./routes/api/posts');


const mongoose = require('mongoose');
const { ppid } = require('process');
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
app.use(express.urlencoded({ extended: true })) // to see req.body data in case of signup form
app.use(express.json());

app.use(session({
    secret: 'we need a better secret',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))

  //using flash
  app.use(flash());

  //using session for using sesison 
  app.use(passport.session());
  //using initialising for using passport 
  app.use(passport.initialize());

  passport.use(new localStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());



// Using routes
app.use(authRoutes);
app.use(profileRoutes);

// Using APIs

app.use(postsApiRoute);



// app.get('/',(req,res)=>{
//     // res.send("welcome to twitter clone");
//     if(!req.isAuthenticated()){
//         return res.redirect('/login');
//     }
//     else{
//         res.render('home');
//     }
// })
app.get('/',isLoggedIn,(req,res)=>{
    
        // res.render('home'); //chnaged now
        res.render('home');
})




app.listen(3000,()=>{
    console.log("server running on 3000");
})