const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const { isLoggedIn } = require('../middleware');
const User = require('../models/user');
// const { render } = require('ejs');


//personal profile's
router.get('/profile', isLoggedIn, (req,res)=>{

    let payload = {
        user: req.user,
        displayName: req.user.firstName + " " + req.user.lastName
    }


    res.render('profile' , {payload});
})

//indivisual profile
router.get('/profile/:username', isLoggedIn, async(req,res)=>{
   const user = await User.findOne({username: req.params.username});

   let payload = {
        user: user,
        displayName: user.firstName + " " + user.lastName
    }
    res.render('profile',{payload})
})




module.exports = router;