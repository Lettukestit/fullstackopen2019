import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
//huom. passing array syntax! {array}
const Content = ({parts}) => {
    //console.log({parts})  vs
    //console.log(parts)      
    return parts.map(item => (
         <Part name={item.name} exercises={item.exercises}/>
    ))
 
}

const Total = ({parts}) => {
    let total = 0;
    parts.map( item => (
      total=total + item.exercises
   ))
   return <p>yhteensä {total}</p>
}

const Part = (props) => {
    return  <p>
    {props.name} {props.exercises}
    </p>
}


const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))