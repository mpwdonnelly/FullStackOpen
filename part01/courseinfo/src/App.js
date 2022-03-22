const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} ({props.exercises} Exercises)</p>
    </>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part exercises={props.exercises1} part={props.part1} />
      <Part exercises={props.exercises2} part={props.part2} />
      <Part exercises={props.exercises3} part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Total number of exercises = {props.total}</p>
    </>
  )
}



const App = () => {

  const course = 'Half Stack Application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div className="App">
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} 
         part2={part2} exercises2={exercises2} 
         part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;
