const request = require('postman-request');

const forecast = ({latitude, longitude}, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e87bf2f642a62e7bfc483ec4992ba6b4&query=' + latitude + ',' + longitude;

    request({url: url, json: true}, (error, response) => {
        callback(response.body.current.weather_descriptions[0]);
    })
}

module.exports = forecast;