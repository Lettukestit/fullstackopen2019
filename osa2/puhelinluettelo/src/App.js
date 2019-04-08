import React, { useState } from 'react'

const Numerot = ({persons}) => {
  console.log("printing ", persons)
  return (
        persons.map((element) => (
          <li key={element.name}>{element.name} puh. {element.number}</li>
        )
      )
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-12345678" },
    { name: 'Anna Pakkala', number: "040-123454568" },
    { name: 'Risto Reipas', number: "040-12225678" },
    { name: 'Ville Valo', number: "040-123453338" }
  ]) 
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
      let copy = [...persons, {name:newName, number:newNumber}] 
      setPersons(copy)
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
      <label>Haku
      <input onChange={search}/>
      </label>
      <h3>Lisää numero</h3>
      <form onSubmit={addEntry}>
        <div>
          nimi: <input value={newName} onChange={handleNameChange}/> <br/>
          numero: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>
      <Numerot persons={persons}/>
      </ul>
    </div>
  )

}

export default App