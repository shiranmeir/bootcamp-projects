const tweeter = Tweeter()
const renderer = Renderer()


let post = function(){
    let value= $("#input").val()
    tweeter.addPost(value)
    renderer.renderPosts(tweeter.getPosts())
}
 $("body").on("click",".delete",function(){
     tweeter.removePost($(this).closest(".post").data().id)
     renderer.renderPosts(tweeter.getPosts())
 })

$("body").on ("click","#button" ,function(){
    tweeter.addComment($(this).siblings("input").val(),$(this).closest(".post").attr("id"))
    renderer.renderPosts(tweeter.getPosts())
 })

 $("body").on("click",".delete-comment",function(){
     tweeter.removeComment($(this).closest(".post").data().id,$(this).closest(".comments").attr("data-id"))
     renderer.renderPosts(tweeter.getPosts())
 })