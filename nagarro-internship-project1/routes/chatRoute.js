const { json } = require("express");
const express = require("express");
const { isLoggedIn } = require("../middleware");
const router = express.Router();
const Chat = require('../models/chat')

router.get('/messages',isLoggedIn,(req,res)=>{
    res.render("chatPage",{user:req.user});
})


router.get('/allmessages',async (req,res)=>{
     const allMsgs = await Chat.find({});
     res.json(allMsgs);
})


module.exports = router;