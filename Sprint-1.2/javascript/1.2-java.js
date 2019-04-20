
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
console.log(ourUsers[0].name)
// ^^ THIS WILL CONSOLE LOG MICHAEL LYONS!!



var button = document.querySelector('#comments__button');
button.onclick = () => {
    var userName = document.querySelector('#userName');
    var nameContent = document.querySelector('#nameContent');
    var newName = document.createElement('div');
    var userComment = document.querySelector('#userComment');
    var commentContent = document.querySelector('#commentContent');
    var newComment = document.createElement('div');
    // push these variables to the array
    // ourUsers.push(name: userName.value)
    newName.innerText = ourUsers.i
    newName.innerText = userName.value
    // newName.classList.add('name__new')
    nameContent.appendChild(newName)
    userName.value = ''
    newComment.innerText = userComment.value
    // newComment.classList.add('comments__new')
    // ^ this will add stylings
    commentContent.appendChild(newComment)
    userComment.value = ''
}


