const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const { isLoggedIn } = require('../../middleware');
const User = require('../../models/user');


// To get all the posts
router.get('/api/post',isLoggedIn,async(req, res) => {

    const posts=await Post.find({}).populate('postedBy');  //chnages (simply giving the method populate the thing what to populate)
    res.json(posts);
})


// To Add new post
router.post('/api/post',isLoggedIn,async (req, res) => {
    
//    console.log(req.body);

    const post = {
        content: req.body.content,
        postedBy:req.user
    }

    const newPost=await Post.create(post);

    res.json(newPost);
})

// to add likes 
router.patch('/api/posts/:id/like',isLoggedIn,async(req,res)=>{

    // res.send("you hit the route");
    const postId = req.params.id;
    const userId = req.user._id;
    
    const isLiked = req.user.likes && req.user.likes.includes(postId);
    
    const option = isLiked ? '$pull':'$addToSet';

    req.user=await User.findByIdAndUpdate(userId,{[option]:{likes:postId}},{new:true});

    const post = await Post.findByIdAndUpdate(postId,{[option]:{likes:userId}},{new:true});


    res.status(200).json(post);
})

module.exports = router;