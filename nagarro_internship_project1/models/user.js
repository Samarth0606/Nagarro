const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userScheama = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:true
    },
    lastName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        unique:true, // validating your schema
        required:true
    },
    profilePic:{
        type:String,
        default:'/images/profilePic.jpeg'
    },
    //changes
    likes:[{
        type: mongoose.Schema.Types.ObjectId,    //changes
        ref:'Post',
    }]

});

userScheama.plugin(passportLocalMongoose);
const User = mongoose.model('User' , userScheama );

module.exports = User;