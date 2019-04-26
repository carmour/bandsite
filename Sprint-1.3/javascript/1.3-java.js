// {"api_key":"beb87a9b-5906-4cfe-889b-eda759555051"}
// https://project-1-api.herokuapp.com/comments?api_key=beb87a9b-5906-4cfe-889b-eda759555051
// 

// ORIGINAL JAVASCRIPT
// Prevent page from refreshing on comment submit
// supposed to be addEventListener
var form = document.getElementById('comments__form');
form.onsubmit = (e) => {
    e.preventDefault();
}

// Array of pre-existing comments
// var ourUsers = [
//     {
//         name: "Michael Lyons",
//         comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
//         date: "12/18/2018",
//         photo: "bandsite-photos/light-grey.png"
//     }, {
//         name: "Gary Wong",
//         comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//         date: "12/12/2018",
//         photo: "bandsite-photos/light-grey.png"
        
//     }, {
//         name: "Theodore Duncan",
//         comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//         date: "11/15/2018",
//         photo: "bandsite-photos/light-grey.png"
//     }
// ];
// ^we won't be using this anymore -- instead, we are going to be taking our input
// directly from the API, and funneling that into the page. This includes the 
// new comments as well -- after they are put onto the API, they will immediately be
// taken and put on the webpage in real time, using the same mechanism

// request for API key
// axios
//     .get("https://project-1-api.herokuapp.com/register")
//     .then(function(response) {
//         console.log(response.data)
//     })

const accessAPI = "https://project-1-api.herokuapp.com/comments?api_key=06ce8b32-ff65-48ce-b587-e402a06d74d7"

// SO, we need to build a new array!
// but this time, from data from the API, rather than hard coded info
// then, iterate through this array just like we did before, then 4371433e-7043-45c9-b98f-a76ff5ba89d4"
const newOurUsers = []
axios    
    .get(accessAPI)
    .then(function(response) {
        response.data.forEach(function(comment) {
            newOurUsers.unshift(comment)
        })
        commentCreator(newOurUsers)
        // console.log(newOurUsers[0].comment)
        // console.log(newOurUsers.length)
        // this creates the pre-existing comments!
    })

// var accessAPI = "https://project-1-api.herokuapp.com/comments?api_key=beb87a9b-5906-4cfe-889b-eda759555051"
// axios
//     .get(accessAPI)
//     .then(function(response) {
//         // console.log(response)
//         response.data.forEach(function(comment) {
//             console.log(comment)
//             // name div
//             const nameDiv = document.createElement('div')
//             nameDiv.classList.add('nameDiv');
//             nameDiv.innerText = comment.name;
//             // const testingNames = document.createElement('div')
//             // testingNames.innerHTML = comment.name
//             // const APINameTest = document.getElementById('API__name')
//             // APINameTest.appendChild(testingNames)

//             // timestamp
//             const dateDiv = document.createElement('div')
//             dateDiv.classList.add('dateDiv')
//             dateDiv.innerText = comment.timestamp;
//             // create name/date div
//             const nameDateDiv = document.createElement('div');
//             nameDateDiv.classList.add('nameDateDiv');
//             nameDateDiv.appendChild(nameDiv);
//             nameDateDiv.appendChild(dateDiv);
            
//             // textDiv
//             const textDiv = document.createElement('div');
//             textDiv.classList.add('textDiv');
//             textDiv.innerHTML = comment.comment;
//             // inputDiv
//             const inputDiv = document.createElement('div')
//             inputDiv.classList.add('inputDiv')
//             inputDiv.appendChild(nameDateDiv)
//             inputDiv.appendChild(textDiv)
//             //commentDiv
//             const commentDiv = document.createElement('div')
//             commentDiv.appendChild(inputDiv)

//             return commentDiv;
//         })
//     })

// // Structures comments on bio page base on pre-existing objects, new inputs
function buildComment(commentInput) {
    // create photo div
    var photoDiv = document.createElement('div');
    var profilePhoto = document.createElement('img');
    photoDiv.classList.add('photoDiv');
    profilePhoto.classList.add('profilePhoto');
    profilePhoto.src = commentInput.photo;
    photoDiv.appendChild(profilePhoto); 
    // create name div
    var nameDiv = document.createElement('div');
    nameDiv.classList.add('nameDiv');
    nameDiv.innerText = commentInput.name;
    // create date div
    var dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    dateDiv.innerText = commentInput.timestamp;
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
    // commentDiv.appendChild(photoDiv);
    commentDiv.appendChild(inputDiv); 

    return commentDiv;    
}

// Iterates through array to create comments
// so, for 1.3, we won't need this? because they are not in an array on the 
// javascript page?
// we might need to have this in place because this is the process that
// allows us to make the div in the right order
// commentCreator is the function that creates comments
// we could embed this in the function we are building now, and just change
// the inputs
// we might not actually need to change very much, except maybe the source
// of the inputs to the array? -- it will become the API
// and when new comments are added to the API, they are then run through the 
// same mechanisms
// function commentCreator(commentArray) {
//     for (var i = 0; i < commentArray.length; i++) {
//         var commentObj = {
//             name: commentArray[i].name,
//             comment: commentArray[i].comment,
//             date: commentArray[i].date,
//             // photo: commentArray[i].photo
//         };
//         var commentDiv = buildComment(commentArray[i]);
//         var commentContent = document.querySelector('#commentContent');
//         commentContent.appendChild(commentDiv);    
//     }
// }
// commentCreator(ourUsers)
function commentCreator(commentArray) {
    for (var i = 0; i < commentArray.length; i++) {
        var commentObj = {
            name: commentArray[i].name,
            comment: commentArray[i].comment,
            date: commentArray[i].timestamp,
            // photo: "bandsite-photos/light-grey.png"
            // photo: commentArray[i].photo
        };
        var commentDiv = buildComment(commentArray[i]);
        var commentContent = document.querySelector('#commentContent');
        commentContent.appendChild(commentDiv);    
    }
}
// commentCreator(newOurUsers)

// Unshift new comments to pre-existing array, add new comments
// to page
var button = document.querySelector('#comments__button');
// button.onclick = () => {
// added event listener instead of onclick() function
// should be able to get rid of all the divs created, because this should
// be done by the function above
button.addEventListener("click", () => {
    // takes user input to create new object
    var userName = document.querySelector('#userName');
    var userComment = document.querySelector('#userComment');
    var commentContent = document.querySelector('#commentContent');
    // const newUserName = userName.value
    // const newUserComment = userComment.value
    // const newCommentContent = {
    //     name: userName.value,
    //     comment: userComment.value
    // }

    // all functioning as it should 
    axios
        .post(accessAPI, {
            name: userName.value,
            comment: userComment.value
        })
        .then(response => {
            console.log(response)
            response.data.forEach(function(comment) {
                newOurUsers.unshift(comment)
            })
            commentCreator(newOurUsers)

            console.log(newOurUsers)

            // commentCreator(newOurUsers)
        })

        // console.log(newOurUsers)
    // should return a 404 error instead of this
    // if (userComment.value === '') {
        //     alert("Please write a comment before attempting to submit")
        //     return false
        // } 
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
    // commentContent.innerText = ''

    // commentCreator(newOurUsers)

    // userName is locked at Mohan Muruge (same w/ image)
    userName.value = 'Mohan Muruge'
    // comment box is cleared after each comment
    userComment.value = ''
})



