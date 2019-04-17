import React, { useState  } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'

import axios from 'axios'

const App = () => {
 

  const [ countries, setCountries] = useState([]) 

  const viewCountry = (c) => {
    console.log("clicked",c)
    axios.get('https://restcountries.eu/rest/v2/name/'+c).then(response => {
      const countries = response.data
        setCountries(countries)      
    })
  }

  const search = (event) => { 
    //console.log(event.target.value)   
    axios.get('https://restcountries.eu/rest/v2/name/'+event.target.value).then(response => {
      const countries = response.data
      console.log(countries)
      if(countries.length > 10 ) {
        setCountries([])
      } else {
        setCountries(countries)
      }
    })
  }

  return (
    <div>
      <h2>Find countries</h2>
     <Filter onChange={search} />
    
      <ul>
      <Countries countries={countries} handler={viewCountry}/>
      </ul>
    </div>
  )

}

export default App