const express =  require('express');
const router = express.Router();

//for signup page/form
router.get('/register' ,(req,res)=>{
    res.render('auth/signup');
})


//routes to register

module.exports = router;