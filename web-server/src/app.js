const express = require('express');
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()

app.get('', () => {
    res.send('hello express')
})

app.get('/weather', (req, res) => {
    const city = req.query.city;

    if (city) {
        geocode(city, (data) => {
            const {latitude, longitude} = data;
                
            forecast({latitude, longitude}, (response) => {
                res.send({
                    data: response
                })
            });
        })
    } else {
        res.send('please provide a city')
    }
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})