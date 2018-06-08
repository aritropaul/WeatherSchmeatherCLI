const axios = require('axios')

module.exports = async () => {
    const results = await axios({
        method : 'get',
        url : 'http://ip-api.com/json'
    })

    location = `${results.data.city},${results.data.countryCode}`
    return location
}