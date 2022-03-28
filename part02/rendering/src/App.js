import Note from './components/Note'

const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <h3>rendered by hard coding</h3>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>

      <h3>rendered using map</h3>
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
      <h3>rendered using destructuring</h3>
      <ul>
        {notes.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
      <h3>rendered using a separate component</h3>
      <ul>
          {notes.map(note => <Note key={note.id} note={note}/>)}

      </ul>
    </div>
  )

}


export default App