import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{ text }</button>
    </>
  )
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often', 
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [votes, setVotes] = useState (new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)


  const selectAnecdote = () => {
    // ensure that the next selection is different from the previous
    // prevents repetition
    let rand = -1
    while (rand === selected || rand < 0) {
      rand = Math.floor(Math.random() * 7)
    }
    setSelected(rand)
  }

  const addVote = () => {
    // make a copy of the current votes array
    const votesCopy = votes
    //add one to the selected item because it just got one votes
    votesCopy[selected] += 1
    // set the main array to be equal to updated version
    setVotes(votesCopy)

  }

  const Display = () => {

    return (
      <>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
      </>
    )
  }

  const Winner = () => {

    const winning = Math.max(...votes)
    const winner = votes.findIndex(element => element == winning)

    return (
      <>
        <h3>Anecdote with the most votes</h3>
        <p>{anecdotes[winner]}</p>
        <p>has {votes[winner]} votes</p>
      </>
    )
  }


  return (

    <div>
      <Display />
      <Button onClick={addVote} text="vote" />
      <Button onClick={selectAnecdote} text="next anecdote" />
      <Winner />


    </div>
  )
}

export default App;
