const socket = io();

$('#send-btn').click(()=>{
    socket.emit('send-msg' , {
        msg: $('#inp').val()
    })

    $('#inp').val("");
})


socket.on('receive-msg' , (data)=>{
    $('#chat').append(`<li> ${data.msg} --> ${data.id} </li>`);
    // console.log(data);

})