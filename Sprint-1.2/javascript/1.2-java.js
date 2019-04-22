
// HOW TO ADD COMMENTS W/ JAVASCRIPT

var form = document.getElementById('comments__form');
form.onsubmit = (e) => {
    e.preventDefault();
}

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

var ourUsers = [
    {
        name: "Michael Lyons",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        date: "12/18/2018",
        photo: "bandsite-photos/band-img.jpg"
    }, {
        name: "Gary Wong",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        date: "12/12/2018",
        photo: "bandsite-photos/band-img.jpg"

    }, {
        name: "Theodore Duncan",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        date: "11/15/2018",
        photo: "bandsite-photos/band-img.jpg"
    }
];

function buildComment(commentInput) {
    // builds our comment div
    
    // create photo div
    var photoDiv = document.createElement('div');
    var profilePhoto = document.createElement('img');
    photoDiv.classList.add('photoDiv');
    profilePhoto.classList.add('profilePhoto');
    profilePhoto.src = commentInput.photo;
    // add photo
    photoDiv.appendChild(profilePhoto);
    
    // create name div
    var nameDiv = document.createElement('div');
    nameDiv.classList.add('nameDiv');
    nameDiv.innerText = commentInput.name;
    // create date div
    var dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    dateDiv.innerText = commentInput.date;
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
        var commentObj = {
            name: commentArray[i].name,
            comment: commentArray[i].comment,
            date: commentArray[i].date
        };
        
        // commentDiv.innerText = commentObj.name + "\n" + commentObj.date + "\n" + commentObj.comment + "\n"
        // call buildComment()
        var commentDiv = buildComment(commentArray[i]);
        var commentContent = document.querySelector('#commentContent');
        commentContent.appendChild(commentDiv);    

        // createName.innerText = existingName;
        // var existingComment = (ourUsers[i].comment);
        // var createComment = document.createElement('div');
        // var ourComment = document.querySelector('#ourComment');
        // // createComment.innerText = existingComment;
        // ourComment.appendChild(createComment)
    }
}
commentCreator(ourUsers)

var button = document.querySelector('#comments__button');
button.onclick = () => {
    var userName = document.querySelector('#userName');
    var nameContent = document.querySelector('#commentContent');
    var newName = document.createElement('div');
    var userComment = document.querySelector('#userComment');
    var commentContent = document.querySelector('#commentContent');
    var newComment = document.createElement('div');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var newEntry = {
        name: userName.value,
        comment: userComment.value,
        date: mm+'/'+dd+'/'+yyyy,
        photo: "bandsite-photos/Mohan-muruge.jpg"
    }
    ourUsers.unshift(newEntry);
    commentContent.innerText = ''
    commentCreator(ourUsers)

    // newComment.innerText = userName.value + "\n" + userComment.value + "\n";
    // commentContent.appendChild(newComment);
    // newName.classList.add('name__new')
    //nameContent.appendChild(newName)
    userName.value = 'Mohan Muruge'
    //newComment.innerText = userComment.value
    // newComment.classList.add('comments__new')
    //commentContent.appendChild(newComment)
    userComment.value = ''
}



