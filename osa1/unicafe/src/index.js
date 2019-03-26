import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (state) => {
    console.log(state)
    let yhteensa = state.good + state.bad + state.neutral
    let keskiarvo = state.good + (state.bad *-1) + (state.neutral*0)/yhteensa
    if(state.good || state.bad || state.neutral) {
        return (
        <div>
        <h3>Statistiikka</h3>
        <p>Good: {state.good}</p>
        <p>Neutral: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        <p>Yhteensä: {yhteensa}</p>
        <p>Keskiarvo: { keskiarvo}</p>
        <p>Positiivisia: {state.good/yhteensa}</p>
        </div>
    )
        } else {
            return (
                <div>
                <h3>Ei tilastoja</h3>
                <p>Ei yhtään palautetta annettu</p>
                </div>
            )
        }
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

  //set good
  const goodHandler = () => {
    //setGood(good+1)
    const newGood = good + 1
    setGood(newGood)
    }
    const badHandler = () => {
        //setGood(good+1)
        const newBad = bad + 1
        setBad(newBad)
    }
    const neutralHandler = () => {
        //setGood(good+1)
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
    }

  console.log(bad)
  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handler={goodHandler} label="Good"/>
      <Button handler={neutralHandler} label="Neutral"/>
      <Button handler={badHandler} label="Bad"/>
    
      <Statistics bad={bad} good={good} neutral={neutral}/>
      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)