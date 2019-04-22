import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherDetails from './WeatherDetails'

const Weather = ({capital}) => { 

    const [weather, setWeather] = useState('')  

    useEffect(() => {
    console.log('Weather effect, querying api http://api.apixu.com/v1/current.json?key=00a1c4ab855848be9c1195229191904&q='+capital)
        axios.get('http://api.apixu.com/v1/current.json?key=00a1c4ab855848be9c1195229191904&q='+capital).then(
            response => {
                console.log("Weather response.data",response.data)  
                setWeather(response.data)      
                console.log("Weather in Weather component:", weather)        
            })
    },[])

     
      return (  
          //async means this value not set yet
        //<div>{weather.data.location.name}</div>
        <WeatherDetails weather={weather} />
        
    ) 
}

export default Weather