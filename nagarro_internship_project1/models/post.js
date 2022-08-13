const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    content: {
        type: String,
        trim: true      //changes
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,    //changes
        ref:'User', //changes (storing the complete user instead of just the postedBy
    },
    //addition
    likes:[{
        type: mongoose.Schema.Types.ObjectId,    //changes
        ref:'User',
    }]
} , {timestamps:true});  //changes


const Post = mongoose.model("Post", postSchema);

module.exports = Post;