const Tweeter = function () {
    let index = 0
    let i=0
    let _posts = [
        // {
        //     text: "First post!",
        //     id: "p1",
        //     comments: [
        //         { id: "c1", text: "First comment on first post!" },
        //         { id: "c2", text: "Second comment on first post!!" },
        //         { id: "c3", text: "Third comment on first post!!!" }
        //     ]
        // },
        // {
        //     text: "Aw man, I wanted to be first",
        //     id: "p2",
        //     comments: [
        //         { id: "c4", text: "Don't wory second poster, you'll be first one day." },
        //         { id: "c5", text: "Yeah, believe in yourself!" },
        //         { id: "c6", text: "Haha second place what a joke." }
        //     ]
        // }
    ]



    const getPosts = function () {
        return _posts
    }

    const addPost = function (text) {

        _posts.push({
            id: "p" + index++,
            text: text,
            comments: []
        })
    }

    const removePost = function (postID) {
        let delPost= findIndex(postID)
       return  _posts.splice(delPost , 1)


    }
    let findIndex = function (postID) {
        for (let indexing in _posts) {
            if (_posts[indexing].id == postID) {
                return indexing
            }

        }
    }
    let addComment= function(text,postID){
        let index= findIndex(postID)
        _posts[index].comments.push({
            id: "c" + i++,
            text:text
        })
    }
    let removeComment= function(postID,commentID){
        let delPost= findIndex(postID)
        let delComm= findIndexComm(commentID,delPost)
        _posts[delPost].comments.splice(delComm,1)
    }

    let findIndexComm= function (commentID, postIndex) {
        for (let incom in _posts[postIndex].comments) {
            if (_posts[postIndex].comments[incom].id == commentID) {
                return incom
            }

        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        findIndex,
        addComment,
        removeComment
    }
}




// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}
