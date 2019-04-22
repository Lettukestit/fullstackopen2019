import React from 'react'

const WeatherDetails = ({weather}) => {
    
    //console.log("WeatherDetails props weather.location:",weather.location)
    if ( ! weather ) {
		return (
			<div></div>
		)
    }
  
    return (
        <div>
        <h3>Weather in {weather.location.name}</h3>
        <div><b>Temperature:</b> {weather.current.temp_c} celcius</div>
        <img src={weather.current.condition.icon} alt={weather.current.condition.text}/>
        <div><b>Wind:</b> {weather.current.wind_kph} direction {weather.current.wind_dir} </div>
        </div>
    )
}
export default WeatherDetails