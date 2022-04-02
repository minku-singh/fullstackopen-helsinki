import React, { useState } from 'react'
import Note from './components/Note';

function App(props){
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  function handleNoteChange(e){
    setNewNote(e.target.value)
  }
  function addNote(e){
    e.preventDefault();
    let noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random()*0.5
    }
    let newNotes = notes.concat(noteObject)
    setNotes(newNotes)
    setNewNote("")
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>{showAll ? "show important" : "show all"}</button>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note = {note} />)}
      </ul>

      <form onSubmit={addNote}>
        <input 
          type="text" 
          value={newNote}
          onChange = {handleNoteChange}
        />
        <button type='submit'>add note</button>
      </form>
    </div>
  )
}

export default App;
