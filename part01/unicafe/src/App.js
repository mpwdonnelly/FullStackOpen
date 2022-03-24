import { useState } from 'react'

const App = () => {

  const [ good, goodCount ] = useState(0)
  const [ bad, badCount ] = useState(0)
  const [ neutral, neutralCount ] = useState(0)

  return (
    <div className="App">
      <h2>give feedback</h2>
      <button onClick={() => goodCount(good + 1)}>good</button>
      <button onClick={() => neutralCount(neutral + 1)}>neutral</button>
      <button onClick={() => badCount(bad + 1)}>bad</button>
      <h2>statistics</h2>
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(((good + neutral + bad) / 3).toFixed(2))}</p>
      <p>% positive = { (((good/(bad + good + neutral))* 100).toFixed(2)) }</p>
    </div>
  );
}

export default App;
