import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0})

  //random
  const clickHandler = () => {
    const rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand) 
    console.log("clickhandler new selected after click", selected)
  }

  const voteHandler = () => {
      console.log("voteHandler original val for "+ selected+":",votes[selected])
      const copy = {...votes, [selected]:votes[selected]+1}
      setVotes( copy)
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <p><button onClick={clickHandler}>Next anecdote</button></p>
      <p><button onClick={voteHandler}>Vote for this anecdote</button>
        </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)