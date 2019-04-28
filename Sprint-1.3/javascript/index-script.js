// {"api_key":"beb87a9b-5906-4cfe-889b-eda759555051"}
// https://project-1-api.herokuapp.com/comments?api_key=beb87a9b-5906-4cfe-889b-eda759555051
// 

// ORIGINAL JAVASCRIPT
var form = document.getElementById('comments__form');
form.onsubmit = (e) => {
    e.preventDefault();
}

// request for API key
// axios
//     .get("https://project-1-api.herokuapp.com/register")
//     .then(function(response) {
//         console.log(response.data)
//     })

const accessAPI = "https://project-1-api.herokuapp.com/comments?api_key=cf4f4fc6-cdae-4556-9969-0993a0f053b6"

const newOurUsers = []
function getRequest() {
    axios    
        .get(accessAPI)
        .then(function(response) {
            response.data.forEach(function(comment) {
                newOurUsers.unshift(comment)
                for (let i = 0; i < newOurUsers.length; i++) {
                    if (newOurUsers[i].name === "Mohan Muruge") {
                        newOurUsers[i].image = "bandsite-photos/mohan-2.PNG"
                    } else {
                        newOurUsers[i].image = "bandsite-photos/light-grey.png"
                    }
                }
            })
            // then, create the comment with those objects as well
            commentCreator(newOurUsers)
        })
}
getRequest()
console.log(newOurUsers)


// // Structures comments on bio page base on pre-existing objects, new inputs
function buildComment(commentInput) {
    // create photo div
    var photoDiv = document.createElement('div');
    var profilePhoto = document.createElement('img');
    photoDiv.classList.add('photoDiv');
    profilePhoto.classList.add('profilePhoto');
    profilePhoto.src = commentInput.image
    if (commentInput.name === "Mohan Muruge") {
        profilePhoto.src = "bandsite-photos/mohan-2.PNG";
    }
    photoDiv.appendChild(profilePhoto); 
    // create name div
    var nameDiv = document.createElement('div');
    nameDiv.classList.add('nameDiv');
    nameDiv.innerText = commentInput.name;
    // create date div
    var dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    const timeElapsed = Math.floor((Date.now() - commentInput.timestamp)/(1000*60*60*24));
    if (timeElapsed < 1) {
        dateDiv.innerText = "Less than a day ago"
    } else if (timeElapsed > 1 && timeElapsed < 2) {
        dateDiv.innerText = "A day ago"
    } else {
        dateDiv.innerText = timeElapsed + " days ago";
    }
    // create text div
    var textDiv = document.createElement('div');
    textDiv.classList.add('textDiv');
    textDiv.innerText = commentInput.comment;
    // create name/date div
    var nameDateDiv = document.createElement('div');
    nameDateDiv.classList.add('nameDateDiv');
    nameDateDiv.appendChild(nameDiv);
    nameDateDiv.appendChild(dateDiv);
    // create input div
    var inputDiv = document.createElement('div');
    inputDiv.classList.add('inputDiv');
    inputDiv.appendChild(nameDateDiv);
    inputDiv.appendChild(textDiv);
    // create comment div
    var commentDiv = document.createElement('div');
    commentDiv.classList.add('commentDiv');
    commentDiv.appendChild(photoDiv);
    commentDiv.appendChild(inputDiv); 

    return commentDiv;    
}

function commentCreator(commentArray) {
    for (var i = 0; i < commentArray.length; i++) {
        // const timeElapsed = (Math.floor((Date.now() - commentArray[i].timestamp)/(1000 * 60 * 60 *24)))
        // var commentObj = {
        //     name: commentArray[i].name,
        //     comment: commentArray[i].comment,
        //     date: commentArray[i].timestamp,
        //     photo: commentArray[i].image
        // };
        var commentDiv = buildComment(commentArray[i]);
        var commentContent = document.querySelector('#commentContent');
        commentContent.appendChild(commentDiv);    
    }
}

// Unshift new comments to pre-existing array, add new comments
// to page
var button = document.querySelector('#comments__button');
button.addEventListener("click", () => {
    // takes user input to create new object
    var userName = document.querySelector('#userName');
    var userComment = document.querySelector('#userComment');
    var commentContent = document.querySelector('#commentContent');
    axios
    .post(accessAPI, {
        name: userName.value,
        comment: userComment.value,
        // image: "bandsite-photos/mohan-2.PNG"
        // ^^ this breaks the ability to post comments
    })
    .then(response => {
            // console.log(response.data)
            newOurUsers.unshift(response.data)
            commentCreator(newOurUsers)
        })
        console.log(newOurUsers)
        // user is locked at Mohan Muruge, because he is the one signed in
        commentContent.innerText = ''
        userName.value = 'Mohan Muruge'
        // comment box is cleared after each comment
        userComment.value = ''
    })


    
    // if (userComment.value === '') {
    //         alert("Please write a comment before attempting to submit")
    //         return false
    //     } 
    // should return a 404 error instead of this -- catch?
    
    // old javascript
    // var newName = document.createElement('div');
    // var newComment = document.createElement('div');
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1; 
    // var yyyy = today.getFullYear();
    // // creates new object based on new comment
    // var newEntry = {
    //     name: userName.value,
    //     comment: userComment.value,
    //     date: mm+'/'+dd+'/'+yyyy,
    //     photo: "bandsite-photos/mohan-2.PNG"
    // }
    // unshifts new object to array
    // ourUsers.unshift(newEntry);

    // commentCreator(newOurUsers)




