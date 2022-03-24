import { useState } from 'react'

const Statistics = ({ bad, neutral, good, total }) => {

  return (
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {((total / 3).toFixed(2))}</p>
      <p>percent positive = { (total > 0) ? (((good/total)* 100).toFixed(2)) : '0.00'} %</p>
    </>
  )
}

const App = () => {

  const [ good, goodCount ] = useState(0)
  const [ bad, badCount ] = useState(0)
  const [ neutral, neutralCount ] = useState(0)
  const total = good + bad + neutral

  return (
    <div className="App">
      <h2>give feedback</h2>
      <button onClick={() => goodCount(good + 1)}>good</button>
      <button onClick={() => neutralCount(neutral + 1)}>neutral</button>
      <button onClick={() => badCount(bad + 1)}>bad</button>
      <Statistics bad={bad} good={good} neutral={neutral} total={total} />
      
    </div>
  );
}

export default App;
