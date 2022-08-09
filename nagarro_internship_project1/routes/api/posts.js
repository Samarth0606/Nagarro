const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
// const { post } = require('../authRoutes');
const {isLoggedIn} = require('../../middleware');



//get all the posts

router.get('/api/post' , isLoggedIn , async (req,res)=>{
     const posts = await Post.find({});
     res.json(posts);
})

//to add a new post

router.post('/api/post' ,isLoggedIn, async (req,res)=>{
    // console.log(req.body);
    const post = {
        content: req.body.content,
        postedBy: req.user.username,

    }
    const newpost = await Post.create(post);
    res.json(newpost);

})




module.exports = router;