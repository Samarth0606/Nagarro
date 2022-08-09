const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        trim:true,
        required:true
    },
    postedBy:{
        type:String,
        trim:true,
        required:true
    }

})


const Post = mongoose.model('Post', postSchema);

module.exports = Post;