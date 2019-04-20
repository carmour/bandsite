
// HOW TO ADD COMMENTS W/ JAVASCRIPT

var form = document.getElementById('comments__form');
form.onsubmit = (e) => {
    e.preventDefault();
}

var ourUsers = [
    {
        name: "Michael Lyons",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    }, {
        name: "Gary Wong",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    }, {
        name: "Theodore Duncan",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    }
];
// function createOriginalComments() {
//     for (var i = 0; i < ourUsers.length; i++) {
//         var existingName = (ourUsers[i].name);
//         // console.log(existingName)
//         var createName = document.createElement('div');
//         var ourName = document.querySelector('#ourName');
//         var existingComment = (ourUsers[i].comment);
//         // console.log(existingComment)
//         var createComment = document.createElement('div');
//         var ourComment = document.querySelector('#ourComment');
//         createName.innerText = existingName.value;
//         createComment.innerText = existingComment.value;
//         ourName.appendChild(createName)
//         ourComment.appendChild(createComment)
//     }
// }
// createOriginalComments(ourUsers)

// trying to remove some steps from the for loop
for (var i = 0; i < ourUsers.length; i++) {
    var existingName = (ourUsers[i].name);
    var createName = document.createElement('div');
    var ourName = document.querySelector('#ourName');
    ourName.appendChild(createName)
    createName.innerText = existingName.value;
    var existingComment = (ourUsers[i].comment);
    var createComment = document.createElement('div');
    var ourComment = document.querySelector('#ourComment');
    createComment.innerText = existingComment.value;
    ourComment.appendChild(createComment)
}
// createOriginalComments(ourUsers)



var button = document.querySelector('#comments__button');
button.onclick = () => {
    var newBox = document.querySelector('#newBox');
    var newCommentBox = document.createElement('div')
    newBox.appendChild(newCommentBox)

    var userName = document.querySelector('#userName');
    var nameContent = document.querySelector('#nameContent');
    var newName = document.createElement('div');
    var userComment = document.querySelector('#userComment');
    var commentContent = document.querySelector('#commentContent');
    var newComment = document.createElement('div');
    newName.innerText = userName.value
    // newName.classList.add('name__new')
    nameContent.appendChild(newName)
    userName.value = ''
    newComment.innerText = userComment.value
    // newComment.classList.add('comments__new')
    commentContent.appendChild(newComment)
    userComment.value = ''
}

// button.onclick = () => {
//     var userComment = document.querySelector('#userComment');
//     var commentContent = document.querySelector('#commentContent');
//     var newComment = document.createElement('div');
//     newComment.innerText = userComment.value
//     // newComment.classList.add('comments__new')
//     commentContent.appendChild(newComment)
//     userComment.value = ''
// }


