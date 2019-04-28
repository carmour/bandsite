
const showsAPI = "https://project-1-api.herokuapp.com/showdates?api_key=cf4f4fc6-cdae-4556-9969-0993a0f053b6"

const showsInfo = []
axios
    .get(showsAPI)
    .then(function(response) {
        response.data.forEach(function(info) {
            showsInfo.unshift(info)
    })
    tableCreator(showsInfo)
})
console.log(showsInfo)

// make a 'comment builder' style function, and punch these in 
// to the showsInfo array -- build the shows table based off of
// this, use the same stylings as the already existing table

// in the table builder, hard code the DATE, LOCATION, etc. headers
// change the classes given to the tds to IDs, then just use
// classlist.add to add the appropriate styles
// then, forEach through our array to create the table

// // Structures comments on bio page base on pre-existing objects, new inputs
function buildTable(tableInput) {
    // create date descriptor
    const dateDescriptor = document.createElement('td');
    dateDescriptor.classList.add('shows__descriptor');
    dateDescriptor.innerText = "DATE";
    // create date td
    const showDate = document.createElement('td');
    showDate.classList.add('shows__date');
    showDate.innerHTML = tableInput.date;
    // create venue descriptor
    const venueDescriptor = document.createElement('td');
    venueDescriptor.classList.add('shows__descriptor');
    venueDescriptor.innerText = "VENUE";
    // create venue td
    const showVenue = document.createElement('td');
    showVenue.classList.add('shows__details');
    showVenue.innerHTML = tableInput.location;
    // create location descriptor
    const locationDescriptor = document.createElement('td');
    locationDescriptor.classList.add('shows__descriptor');
    locationDescriptor.innerText = "LOCATION"; 
    // create location td
    const showLocation = document.createElement('td');
    showLocation.classList.add('shows__details');
    showLocation.innerHTML = tableInput.location;
    // create the button, append here
    const showsButton = document.createElement('button');
    showsButton.classList.add('shows__button');
    showsButton.innerHtml = "BUY TICKETS";
    // append the button into the shows__tickets div, then append
    // to tableBuilder
    const showsTickets = document.createElement('td');
    showsTickets.classList.add('shows__tickets');
    showsTickets.appendChild(showsButton);
    // create shows__section tr
    var showsSection = document.createElement('tr');
    showsSection.classList.add('shows__section');
    showsSection.appendChild(dateDescriptor);
    showsSection.appendChild(showDate);
    showsSection.appendChild(venueDescriptor);
    showsSection.appendChild(showVenue);
    showsSection.appendChild(locationDescriptor);
    showsSection.appendChild(showVenue);
    showsSection.appendChild(showsTickets);
    
    return showsSection;   
}

function tableCreator(showsArray) {
    for (var i = 0; i < showsArray.length; i++) {
        // var commentObj = {
            //     date: showsArray[i].date,
            //     location: showsArray[i].location,
            //     place: showsArray[i].place
            // };
        var showsSection = buildTable(showsArray[i]);
        const showsTableBuilder = document.querySelector('#shows__tableBuilder');
        showsTableBuilder.appendChild(showsSection)
        // showsTableBuilder.appendChild(showsSection);    
    }
}
tableCreator(showsInfo)