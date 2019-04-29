// prevents page from reloading on submit
const form = document.getElementById('comments__form');
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
            commentCreator(newOurUsers)
        })
}
getRequest()


// // Structures comments on bio page base on pre-existing objects, new inputs
function buildComment(commentInput) {
    // create photo div
    const photoDiv = document.createElement('div');
    const profilePhoto = document.createElement('img');
    photoDiv.classList.add('photo__div');
    profilePhoto.classList.add('profile__photo');
    profilePhoto.src = commentInput.image
    if (commentInput.name === "Mohan Muruge") {
        profilePhoto.src = "bandsite-photos/mohan-2.PNG";
    }
    photoDiv.appendChild(profilePhoto); 
    // create name div
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name__div');
    nameDiv.innerText = commentInput.name;
    // create date div
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date__div');
    const timeElapsed = Math.floor((Date.now() - commentInput.timestamp)/(1000*60*60*24));
    if (timeElapsed < 1) {
        dateDiv.innerText = "Less than a day ago"
    } else if (timeElapsed > 1 && timeElapsed < 2) {
        dateDiv.innerText = "A day ago"
    } else {
        dateDiv.innerText = timeElapsed + " days ago";
    }
    // create text div
    const textDiv = document.createElement('div');
    textDiv.classList.add('text__div');
    textDiv.innerText = commentInput.comment;
    // create name/date div
    const nameDateDiv = document.createElement('div');
    nameDateDiv.classList.add('nameDate__div');
    nameDateDiv.appendChild(nameDiv);
    nameDateDiv.appendChild(dateDiv);
    // create input div
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input__div');
    inputDiv.appendChild(nameDateDiv);
    inputDiv.appendChild(textDiv);
    // create comment div
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment__div');
    commentDiv.appendChild(photoDiv);
    commentDiv.appendChild(inputDiv); 

    return commentDiv;    
}

const commentContent = document.querySelector('#comment__content');
function commentCreator(commentArray) {
    for (let i = 0; i < commentArray.length; i++) {
        const commentContainer = buildComment(commentArray[i]);
        commentContent.appendChild(commentContainer);
    }
}

// Unshift new comments to pre-existing array, add new comments
// to page
const button = document.querySelector('#comments__button');
button.addEventListener("click", () => {
    // takes user input to create new object
    const userName = document.querySelector('#userName');
    const userComment = document.querySelector('#userComment');
    if (userComment.value === '') {
       alert("Please enter a comment before submitting")
        return false
    }
    axios
    .post(accessAPI, {
        name: userName.value,
        comment: userComment.value
    })
    .then(response => {
            newOurUsers.unshift(response.data)
            commentCreator(newOurUsers)
        })
        // user is locked at Mohan Muruge, because he is the one signed in
        commentContent.innerText = ''
        userName.value = 'Mohan Muruge'
        // comment box is cleared after each comment
        userComment.value = ''
    })