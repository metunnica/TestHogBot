const axios = require('axios');
const router = axios.Router();

router.get('./', (req, res, next) =>{
    
})
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(responce => {
        console.log(responce.data.url);
        console.log(responce.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });
