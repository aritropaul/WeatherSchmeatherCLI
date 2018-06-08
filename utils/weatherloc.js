const axios = require('axios')
require('dotenv').load()

module.exports = async(location) => {
    const results = await axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`
    })
    return results
}
