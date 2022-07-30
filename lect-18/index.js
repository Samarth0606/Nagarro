const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const {v4:uuid} = require('uuid');
const app = express();

app.set('views' , path.join(__dirname , '/views'));
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))


let comments = [
    {
        id:uuid(),
        username:"kartik",
        comment:"hello from kartik"

    },
    {
        id:uuid(),
        username:"samarth",
        comment:"hello from samarth"

    },
    {
        id:uuid(),
        username:"sabeel",
        comment:"hello from sabeel"

    },
    {
        id:uuid(),
        username:"monu",
        comment:"hello from monu"

    }
]


app.get('/' ,(req,res)=>{
    res.send("connected");
})


// get all the comments
app.get('/comments' , (req,res)=>{
    res.render('index', {comments});
})


// to get the for for new comment

app.get('/comments/new' , (req,res)=>{
    res.render('form');
})


// adding the new comment over my database/array
app.post('/comments' , (req,res)=>{
    // console.log(req.body);
    const newComment = {
        id:uuid(),
        ...req.body
    }
    comments.push(newComment);

    res.redirect('/comments');

    // res.send("creating a new comment");
})


// showing  particular comment
app.get('/comments/:id' , (req,res)=>{
    // res.render('form');
    // console.log(req.params);
    const {id} = req.params;
    const foundComment = comments.find((c)=>c.id === (id));
    res.render('show',{foundComment});

    // res.send("new id");
})


//editing form for a comment
app.get('/comments/:id/edit' , (req,res)=>{
    const {id} = req.params;
    const foundComment = comments.find((c)=>c.id === (id));

    res.render('edit', {commentText: foundComment});

    // res.render('form');
})



// routes for comment with patch request (make sure to use and install method-override before it)

app.patch('/comments/:id' , (req,res)=>{
    const {id} = req.params;
    const updatedCommentText = req.body.comment;
    const foundComment = comments.find((c)=>c.id === (id));
    foundComment.comment = updatedCommentText;   //here object is there and object are reference type thats why hojaega

    res.redirect('/comments');
    // res.send("patch req sent");
})


// deleting then comment (similar to patch)
app.delete('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const newCommentsArray = comments.filter((c)=> c.id !== id);
    comments =  newCommentsArray;

    res.redirect('/comments');
})




app.listen(3000,()=>{
    console.log("server connected");
})


