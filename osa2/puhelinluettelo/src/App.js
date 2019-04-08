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
    { name: 'Arto Hellas', number: "040-12345678" }
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
      console.log("copy:",copy)
      setPersons(copy)
    }
    
    console.log("persons:",persons)
  }

  const handleNameChange = (event)=> {
    console.log("handleNameChange event target value:",event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=> {
    console.log("handleNameChange event target value:",event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
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