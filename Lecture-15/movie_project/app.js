const form = $('form');
const result = $('#result');


// api  https://api.tvmaze.com/search/shows?q=girls
function getshows(searchText){

    // checking empty div
    let already = $('#result img:first-child')
    if(already){
        $('img').remove();
    }

// calling api
    let url = `https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url)
    .then((res)=>{
        // console.log(res);

        for(let item of res.data){

            if(item.show.image){
 
                const img = $('<img/>');
                img.attr('src' , `${item.show.image.medium}`)
                img.css('margin','10px')
                // console.log(item);
                result.append(img);
            }
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}


// search 
form.on('submit',function(e){
    e.preventDefault(); // preventing the submit's default functinality

    let searchText = $('#inp').val();

    console.log(searchText);

    $('#inp').val("");
    getshows(searchText);

})