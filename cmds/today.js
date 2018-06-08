const ora = require('ora')
const dotenv = require('dotenv')
const result = dotenv.config({
    path:"/Users/aritropaul/Documents/Codes/Node/WeatherSchmeather/.env"
})
const getWeather = require('../utils/weatherloc')
const getLocation = require('../utils/location')

module.exports = async (args) => {
    
    const spinner = ora().start()
    try{
        const location = args.location || args.l ||await getLocation()
            const weather = await getWeather(location)
            spinner.stop()
            console.log(`Current conditions in ${weather.data.name},${weather.data.sys.country}:`)
            const tempC = weather.data.main.temp - 273.15
            console.log(`\t${tempC}°C`)
            console.log(`\t${weather.data.weather[0].description}`)
    }catch(err){
        spinner.stop()
    }
  }