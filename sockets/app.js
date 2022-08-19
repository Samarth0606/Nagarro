const express = require('express');
const app = express();
const path  = require('path');

const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);


app.use('/' , express.static(path.join(__dirname , '/public')));



io.on('connection' , (socket)=>{
    console.log("connection added");
    console.log(socket.id);

    socket.on('send-msg' , (data)=>{
        console.log(`${data.msg} sent by ${socket.id}`)

    
        // socket.emit('receive-msg' , {
        io.emit('receive-msg' , {
            id:socket.id,
            msg:data.msg
        })

    })

})


server.listen(3003 , ()=>{
    console.log("server connected to port 3003");
})