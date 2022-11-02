const http = require('http'); // node.js module

const url = 'http://api.weatherstack.com/current?access_key=e87bf2f642a62e7bfc483ec4992ba6b4&query=Izmir';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(data);
    })

    response.on('end', (chunk) => {
        const body = JSON.parse(data);
        console.log(body);
    })
});

request.end();