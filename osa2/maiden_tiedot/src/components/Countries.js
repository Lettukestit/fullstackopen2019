import React from 'react'
import Country from './Country'


const Countries = ({countries, handler}) => {

  if(countries.length === 1) {
    return (
        <Country country={countries[0]}/>
    )
  } 
   if (countries.length < 10 && countries.length > 1) { 
      return (
        countries.map((element) => (
          <li key={element.name}>{element.name} 
          <button onClick={handler.bind(this, element.name)}>view country</button></li>
          )
      )
    ) 
  } else {
    return (
      <div>Hakutuloksia on liikaa</div>
    )
  }
}

export default Countries