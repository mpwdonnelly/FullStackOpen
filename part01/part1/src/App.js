
const Hello = (props) => {
  return (
    <div className="App">
        <p>Hello, {props.name}!</p>
        <p>Your birthdate is {props.bday}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Buzz" bday="June 4th" />
      <Hello name="Dolly" bday="Jan 1st" />
      <Hello name="Roscoe P. Coltrane" bday="unknown" />
    </div>
  )
}

export default App;
