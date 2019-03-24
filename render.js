let Renderer=function(){
    let  renderPosts= function(_posts){
        $("#posts").empty()

        for(let index in _posts){
            $("#posts").append(`<div class=post id=${_posts[index].id} data-id=${_posts[index].id}><div class="post-text">${_posts[index].text} </div></div>`)

            for(let indexTwo in _posts[index].comments){
            $(`#${_posts[index].id}`).append(`<div class=comments data-id=${_posts[index].comments[indexTwo].id} ><span class="delete-comment"> X </span> ${_posts[index].comments[indexTwo].text} </div>`)
            }
        }   
        $(".post").append(`<input  type="text" placeholder="Got something to say">`)
        $(".post").append(`<button type="button" id="button">comment</button>`)
        $(".post").append(`<div><button type="button" class=delete >Delete Post</button></div>`)



    }
    return {
        renderPosts: renderPosts
    }
}