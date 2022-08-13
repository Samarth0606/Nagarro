

//changes in refreshTweets function
async function refreshPosts() {  //name changed
    $('.postsContainer').empty();  //id or class changed
    const posts = await axios.get('/api/post');
    
    for (let post of posts.data) {
        
        const html = createPostHtml(post)   //rather than simply appending we are calling a function now.
        $(".postsContainer").prepend(html);  //now prepending so that new tweet appers on the top
        
    }
}

refreshPosts(); //changes the fuction name

$('#submitPostButton').click(async () => {
    const postText = $('#post-text').val();
    console.log(postText);

    const newPost = await axios.post('/api/post', { content: postText });
    // console.log(newPost);

    $('#post-text').val("");
    refreshPosts();   //changed the function name

})

//like functionality (wont work: dynamic)
// $('.likeButton').click(()=>{
//     console.log("clicked");
// })


$(document).on('click','.likeButton',async(event)=>{      //do this
    const button = $(event.target);
    const postId = getPostIdFromElement(button);
    console.log(postId);
    
    const postData=await axios.patch(`/api/posts/${postId}/like`);
    // console.log(postData);
    button.find("span").text(postData.data.likes.length);
    // button.find("span").text(postData.data.likes.length);
})

function getPostIdFromElement(element){

    const isRoot = element.hasClass('post');

    const rootElement = isRoot ===true ? element:element.closest('.post');
    const postId = rootElement.data().id;
    //console.log(postId);
    return postId;
}




//html


//commom.js
function createPostHtml(postData) {
    
    const postedBy = postData.postedBy;

    if(postedBy._id === undefined) {
        return console.log("User object not populated");
    }

    const displayName = postedBy.firstName + " " + postedBy.lastName;
    // const timestamp = postData.createdAt;
    const timestamp = timeDifference(new Date() , new Date(postData.createdAt)) //changed


    return `<div class='post' data-id='${postData._id}'>
                <div class='mainContentContainer'>
                    <div class='userImageContainer'>
                        <img src='${postedBy.profilePic}'>
                    </div>
                    <div class='postContentContainer'>
                        <div class='header'>
                            <a href='/profile/${postedBy.username}' class='displayName'>${displayName}</a>
                            <span class='username'>@${postedBy.username}</span>
                            <span class='date'>${timestamp}</span>
                        </div>
                        <div class='postBody'>
                            <span>${postData.content}</span>
                        </div>
                        <div class='postFooter'>
                            <div class='postButtonContainer'>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    
                                <i class='far fa-comment'></i>
                                </button>
                            </div>
                            <div class='postButtonContainer green'>
                                <button class='retweet'>
                                    <i class='fas fa-retweet'></i>
                                </button>
                            </div>
                            <div class='postButtonContainer red'>
                                <button class='likeButton'>
                                    <i class='far fa-heart'></i>
                                        <span>${postData.likes.length}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

//timestamp to time ago

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        if(elapsed/1000 < 30){  //changed this
            return 'just now'
        }
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return  Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return  Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return  Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}