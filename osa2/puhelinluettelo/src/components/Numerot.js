import React from 'react'

const Numerot = ({persons}) => {
    //console.log("printing ", persons)
    return (
          persons.map((element) => (
            <li key={element.name}>{element.name} puh. {element.number}</li>
          )
        )
    )
  }

  export  default Numerot