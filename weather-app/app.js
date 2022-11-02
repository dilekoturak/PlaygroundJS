const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

const city = process.argv[2];

geocode(city, (data) => {
    if (city) {
        // Object destructuring
        const {latitude, longitude} = data;
        
        forecast({latitude, longitude}, (response) => {
            console.log(response);
        });
    } else {
        console.log('Please provide a city');
    }
})