import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {  
    const val = props.value || ""
      return (
        <tr>
        <td>{props.label}</td><td>{val}</td>
        </tr>
    )
}

const Button = (props) => {    
    return (
        <button onClick={props.handler}>{props.label}</button>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const yhteensa = good + bad + neutral
  const keskiarvo = good + (bad *-1) + (neutral*0)/yhteensa
  const positiivisia = good/yhteensa

  //set good
   const goodHandler = () => {
    const newGood = good + 1
        setGood(newGood)
    }
    const badHandler = () => {
        const newBad = bad + 1
        setBad(newBad)
    }
    const neutralHandler = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
    }



  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handler={goodHandler} label="Good"/>
      <Button handler={neutralHandler} label="Neutral"/>
      <Button handler={badHandler} label="Bad"/>
      <h3>Statistiikka</h3>
      <table>
          <tbody>
      <Statistics value={bad} label="Bad"/>
      <Statistics value={good} label="Good"/>
      <Statistics value={neutral} label="Neutral"/>
      <Statistics value={yhteensa} label="Yhteensä"/>
      <Statistics value={keskiarvo} label="Keskiarvo"/>
      <Statistics value={positiivisia} label="Positiivisia"/>
      </tbody>
      </table>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)