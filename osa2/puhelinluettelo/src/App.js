import React, { useState, useEffect  } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Numerot from "./components/Numerot"
import axios from 'axios'
import personService from './services/persons'


const App = () => {
  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      console.log("effect", response)
      setPersons(response)
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
      //let copy = [...persons, {name:newName, number:newNumber}] 
      //setPersons(copy)
      personService.create(person).then(response=> {
       setPersons(persons.concat(response))
      }
      )
    }
    
    console.log("persons:",persons)
  }

  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=> {
    setNewNumber(event.target.value)
  }

  const handleDelete = (id)=> {
   if( window.confirm("oletko varma?") ) {
      personService.remove(id).then(response => {
        //response will be empty
        const copy = persons.filter((item) => {
          //remove the deleted user from list
          return item.id !== id
        })
        setPersons(copy)
      })
    }
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
      <Numerot persons={persons} handler={handleDelete}/>
      </ul>
    </div>
  )

}

export default App