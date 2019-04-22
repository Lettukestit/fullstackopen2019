import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {
    let lang = country.languages
    return (
    <div>
    <h1>{country.name}</h1>
    <p>Capital {country.capital}</p>
    <p>Population {country.population}</p>
    <h3>languages</h3>
        <ul>
        {lang.map(element => (
            <li key={element.iso639_1}>{element.name}</li>
        ))}
        </ul>
        <img src={country.flag} width="20%" height="20%" alt={country.name}/>
        <Weather capital={country.capital} />
    </div>
    )
}

export default Country