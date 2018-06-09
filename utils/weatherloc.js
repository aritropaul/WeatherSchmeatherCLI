const axios = require('axios')
const dotenv = require('dotenv')
const result = dotenv.config({
    path: __dirname + '/../.env'
})

module.exports = async(location) => { 
    const results = await axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`
    })
    return results
}
