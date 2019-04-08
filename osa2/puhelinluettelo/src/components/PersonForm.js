import React from 'react'

const PersonForm = (props) => {
    return (
    <form onSubmit={props.addEntry}>
        <div>
          nimi: <input value={props.newName} onChange={props.nameOnChange}/> <br/>
          numero: <input value={props.newNumber} onChange={props.numberOnChange}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>)
    }
    export default PersonForm