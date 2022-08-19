const express =  require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');





//to get the signup form only
router.get('/register', (req,res)=>{
    
    res.render('auth/signup',{message:req.flash('error')});
})

// register the user or to send the post request to register new user 
router.post('/register',async (req,res)=>{
    try{
            // console.log(req.body);
        const user = {
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            email : req.body.email,
            username : req.body.username, //you need to write this
        }
        const newUser = await User.register(user,req.body.password)
        // res.send(newUser);
        res.status(200).send(newUser);
        // res.send("it worked");

    }
    catch(e){
        req.flash('error', e.message);
        res.redirect('/register');
    }
})

//login page route

router.get('/login', (req,res)=>{
    res.render('auth/login');

})

//login actually the user

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}),(req,res)=>{
    res.redirect('home');
});


//logout
// this method requires a callback function
router.get('/logout' , (req,res)=>{
    req.logout(()=>{
        res.redirect('/login');
    });
});



module.exports = router;