import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={()=>setGood(good+1)}>Good</button>
      <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
      <button onClick={()=>setBad(bad+1)}>Bad</button>
      <div>
          <h3>Statistiikka</h3>
         <p>Good: {good}</p>
         <p>Neutral: {neutral}</p>
         <p>Bad: {bad}</p>
         <p>Yhteensä: {good+bad+neutral}</p>
         <p>Keskiarvo: { good + (bad *-1) + (neutral*0)/(good+bad+neutral)}</p>
         <p>Positiivisia: {good/(good+bad+neutral)}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)