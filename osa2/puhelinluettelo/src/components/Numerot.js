import React from 'react'

const Numerot = ({persons, handler}) => {
    console.log("printing ", persons)
    return (
          persons.map((element) => (
            <li key={element.name}>{element.name} puh. {element.number}
              <button value={element.id} onClick={handler.bind(this, element.id)}>poista</button></li>
          )
        )
    )
  }

  export  default Numerot