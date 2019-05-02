import React, { useState, useEffect  } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Numerot from "./components/Numerot"
import axios from 'axios'


const App = () => {
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      const persons = response.data
      console.log(persons)
      setPersons(persons)
    })
  }, [])

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const addEntry = (event) => {
    event.preventDefault()

    //tarkista onko tämä nimi jo listassa
    let exists = false;
    persons.forEach((item) => {
      if(item.name === newName) {
        exists = true
      }
    })

    if(exists) {
      alert(`${newName} on jo luettelossa`)
    } else {
      let person = {name:newName, number:newNumber}
      let copy = [...persons, {name:newName, number:newNumber}] 
      setPersons(copy)

      axios
        .post('http://localhost:3001/persons', person)
        .then(response => {
          console.log("added new person", response.data)
    })

    }
    
    console.log("persons:",persons)
  }

  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=> {
    setNewNumber(event.target.value)
  }
  const search = (event) => {    
    let copy = persons.filter((item) => {
      //compare in upper case = case insensitive
       return  item.name.toUpperCase().indexOf (event.target.value.toUpperCase()) > -1
    })
    setPersons(copy)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
     <Filter onChange={search} />
      <h3>Lisää numero</h3>
      <PersonForm 
        addEntry={addEntry} 
        numberOnChange={handleNumberChange} 
        nameOnChange={handleNameChange}
        newName={newName} 
        newNumber={newNumber}/>
      <h3>Numerot</h3>
      <ul>
      <Numerot persons={persons}/>
      </ul>
    </div>
  )

}

export default App