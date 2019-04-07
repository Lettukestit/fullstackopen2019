import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {

    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
      }

    return (
        <div>
        <p>Hello world {props.name}, you are {props.age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const App = () => {
   const nimi = 'Pekka'
   const ika = 25
   const greetings = () => {
       alert("greetings")
   }
    return (
<div>
   <h1>Greetings</h1>
   <Hello name="Arto" age={26+10}/>
   <Hello name={nimi} age={ika}/>
   <button onClick={greetings}>Grret</button>
</div>

)
    }

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

