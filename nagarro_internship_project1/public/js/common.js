

async function refreshTweets(){
    $('#allTweets').empty();
    const tweets = await axios.get('/api/post');

    for(let post of tweets.data){
        $('#allTweets').append(`<li>${post.content} By: ${post.postedBy}</li>`)
    }

}

refreshTweets();


$('#submitPostbutton').click( async ()=>{
    const postText = $('#post-text').val();
    // console.log(postText);

   const newPost = await axios.post('/api/post' , {content:postText});
   console.log(newPost);

   refreshTweets();

    $('#post-text').val("");
})
