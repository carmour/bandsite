
const showsAPI = "https://project-1-api.herokuapp.com/showdates?api_key=cf4f4fc6-cdae-4556-9969-0993a0f053b6"

axios
    .get(showsAPI)
    .then(function(response) {
        console.log(response.data)
        console.log(response.data[0].date)
    })



