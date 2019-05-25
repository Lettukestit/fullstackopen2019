import React, { useState, useEffect  } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Numerot from "./components/Numerot"
import Notification from "./components/Notification"
import axios from 'axios'
import personService from './services/persons'
import './index.css'


const App = () => {
  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      console.log("effect", response)
      setPersons(response)
    })
  })

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ message, setMessage] = useState('')

  const addEntry = (event) => {
    event.preventDefault()

    //tarkista onko tämä nimi jo listassa
    let exists = false;
    let id = null;
    persons.forEach((item) => {
      if(item.name === newName) {
        exists = true
        id = item.id
      }
    })

    if(exists) {
     if( window.confirm(`${newName} on jo luettelossa, korvataanko numero?`)) {
    
      let person = {name:newName, number:newNumber}
      personService.update(id, person).then(response=> {
          setPersons(persons.filter((item) => {
            //remove the deleted user from list
            return item.id !== id
          }).concat(response))
          setMessage(`muokattu käyttäjä ${newName}`)
        }
      )
 
     }
    console.log("persons:",persons)
  } else {
    let person = {name:newName, number:newNumber}
      personService.create(person).then(response=> {
          setPersons(persons.concat(response))
          setMessage(`lisätty käyttäjä ${newName}`)
        }
      )
  }
}

  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=> {
    setNewNumber(event.target.value)
  }

  const handleDelete = (id)=> {
     //response will be empty, find removed object
     const removed_user = persons.find(item => item.id===id)

   if( window.confirm("oletko varma?") ) {
      personService.remove(id).then(response => {
             
        const copy = persons.filter((item) => {
          //remove the deleted user from list
          return item.id !== id
        })
        setPersons(copy)
        setMessage(`poistettu käyttäjä ${removed_user.name}`)
      }).catch(error => {
        setMessage(`Käyttäjä ${removed_user.name} on jo poistettu`)
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
      <Notification message={message}/>
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