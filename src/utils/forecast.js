const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=132e192e48ee855418ca633caa6ee2ea&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "The weather feels like: " + response.body.current.feelslike + ", but It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast