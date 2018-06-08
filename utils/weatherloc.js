const axios = require('axios')
const dotenv = require('dotenv')
const result = dotenv.config({
    path:"/Users/aritropaul/Documents/Codes/Node/WeatherSchmeather/.env"
})

module.exports = async(location) => { 
    const results = await axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`
    })
    return results
}
