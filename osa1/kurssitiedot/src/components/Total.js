import React from 'react'

const Total = ({parts}) => {
    //filter first, then reduce
    const total = parts.map((item) => {
        return item.exercises
    }).reduce( (sum, parts) => {
        return sum + parseInt(parts)
    }         
)
    
   return <p>yhteensä {total}</p>
}

export default Total