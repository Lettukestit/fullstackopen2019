import React from 'react'

const Country = ({country}) => {
    let lang = country.languages
    console.log(lang)
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
   </div>
    )
}

export default Country