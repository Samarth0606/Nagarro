// $('button').click(function(){
//     let content = $(this).text();
//     console.log(content);
// })


// $('input[type="text"]').keypress(function(event){
//     if(event.which == 13){
//        console.log($(this).val())

//         console.log("yu hit enter");
//     }
       
// })

// adding todo
// $('input[type="text"]').keypress(function(event){
//     if(event.which == 13){
//         let todotext = $(this).val();
//         const todo = `<li>${todotext}</li>`

//         $('ul').append(todo);
//         $(this).val("");
//     }

// })

// remove todos
// $('ul').on('click','li',function(event){
//     $(this).remove();

// })
const fetcheddata = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`

const data = JSON.parse(fetcheddata);

console.log(data.ticker);


axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then((res)=>{
    console.log(res.data)

})
.catch((err)=>{
    console.log("error encountred")
})