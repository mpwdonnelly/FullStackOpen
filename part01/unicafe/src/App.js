import { useState } from 'react'



const StatisticLine = ({text, value}) => {
  return (
    <>
      <p>{text} {value} </p>
    </>
  )
}

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{ text }</button>
    </>
    
  )
}

const Statistics = ({ bad, neutral, good, total }) => {
  if (total===0) {return (<><p>No feedback given</p></>)}
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <p>average {((total / 3).toFixed(2))}</p>
      <p>percent positive = { (total > 0) ? (((good/total)* 100).toFixed(2)) : '0.00'} %</p>
    </>
  )
}

const App = () => {

  const [ good, setGood ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const total = good + bad + neutral

  const incrementGood = () => setGood(good + 1)
  const incrementBad = () => setBad(bad + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)

  return (
    <div className="App">
      <h2>give feedback</h2>

      <Button onClick={incrementGood} text='good' />
      <Button onClick={incrementNeutral} text='neutral' />
      <Button onClick={incrementBad} text='bad' />

      <h2>statistics</h2>
      <Statistics bad={bad} good={good} neutral={neutral} total={total} />
      
    </div>
  );
}

export default App;
