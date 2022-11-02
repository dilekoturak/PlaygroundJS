const request = require('postman-request');

const geocode = (address, callback) => {
    const geoCodeURL = 'http://api.positionstack.com/v1/forward?access_key=e9082ce55c7e2488520dcd329bda36ec&query=' + address;

    request({url: geoCodeURL}, (error, response) => {
        const data = JSON.parse(response.body);
        const latitude = data.data[0].latitude;
        const longitude = data.data[0].longitude;
        const latlon = {
            latitude: latitude,
            longitude: longitude
        }

        callback(latlon);
    })

}

module.exports = geocode;