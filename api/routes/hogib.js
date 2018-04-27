var axios = require('axios');
var URL = "http://localhost:3000";

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(responce => {
        console.log(responce.data);
    })
    .catch(error => {
        console.log(error);
    });
