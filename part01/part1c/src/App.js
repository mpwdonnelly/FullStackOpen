const Hello = ({ name, age }) => {

  // helper function to guess birth year
  const birthYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
        You were probably born in {birthYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 34

  return (
    <div className="App">
        <h1>Greetings</h1>
        <Hello name='asdf' age={23+3223} />
        <Hello name={name} age={age} />
    </div>
  );
}

export default App;
