import {useState, useEffect} from 'react'
import SearchNotes from './SearchNotes'
import NotesContainer from './NotesContainer'
import NewNoteForm from './NewNoteForm'

function App() {
  const [notesArray, setNotesArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/notes")
      .then(r => r.json())
      .then(notesData => setNotesArray(notesData))
  }, [])

  const [search, setSearch] = useState("")

  const updateSearch = newInfo => {
    setSearch(newInfo)
  }

  const createNewNote = (newNote) => {
    const newArray = [...notesArray, newNote]
    setNotesArray(newArray)
  }

  const filteredNotes = notesArray.filter(note => {
    return (
      note.content.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div>
      <h1>all the notes!</h1>
      <SearchNotes updateSearch={updateSearch}/>
      <div className="notes-main">
        <NotesContainer notesArray={filteredNotes}/>
        <NewNoteForm createNewNote={createNewNote}/>
      </div>
    </div>
  );
}


export default App;
