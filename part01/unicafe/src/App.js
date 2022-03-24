import { useState } from 'react'



const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
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
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="SUM" value={total} />
          <StatisticLine text="AVE" value={((total / 3).toFixed(2))} />
          <StatisticLine text="%POS" value={ (total > 0) ? (((good/total)* 100).toFixed(2)) : '0.00'} />
        </tbody>
      </table>
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
