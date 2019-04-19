
// HOW TO ADD COMMENTS W/ JAVASCRIPT
var button = document.querySelector('#myButton')
button.onclick = function() {
    var someText = document.querySelector('#someText');
    // console.log(someText.value)
    var content = document.querySelector('#content')
    // content.innerText = someText.value

    var newElement = document.createElement('div')
    newElement.innerText = someText.value + '(' + Date.now() + ')'
    // there are plenty of great ways to add date, google it
    newElement.classList.add('item')
    // this is adding a style to newELement -- I think the class 'item'
    // needs to exist in our styles sheet?
    content.appendChild(newElement)
    // this is adding a new field to our preexisting fields



    someText.value = '' 
    // ^this clears the field
}