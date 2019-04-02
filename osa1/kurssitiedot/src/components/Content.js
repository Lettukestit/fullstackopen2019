import React from 'react'
import Part from './Part'
//huom. passing array syntax! {array}
const Content = ({parts}) => {
    return parts.map(item => (
         <Part name={item.name} key={item.id} exercises={item.exercises}/>
    ))
 
}
export default Content