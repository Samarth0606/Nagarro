const express =  require('express');
const app = express();
const path =  require('path');
const session =  require('express-session');
const passport =  require('passport');
const localStrategy =  require('passport-local');
const User =  require('./models/user');
const flash =  require('connect-flash');

const {isLoggedIn} =  require('./middleware');

const authRoutes = require('./routes/authRoutes');




const mongoose = require('mongoose');
// const passport = require('passport');
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
app.use(express.urlencoded({extended:true}));  // helps you to get the form data inside console


app.use(session({
    secret: 'we need a better secret',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))


  //flash 
  app.use(flash());

  //make use of my sessions (login /logout) 
  app.use(passport.session());
  //used for initializing the passport
  app.use(passport.initialize());
//   authenticating theuser
  passport.use(new localStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());


//using the routes here
app.use(authRoutes);


app.get('/', isLoggedIn ,(req,res)=>{
    // res.send("welcome to twitter clone");
    
        res.render('home');
   
})


app.listen(3000,()=>{
    console.log("server running on 3000");
})