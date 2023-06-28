import SingleNote from './SingleNote'
 
function NotesContainer({notesArray}) {
  const notesComponents = notesArray.map(note => {
    return (
    <SingleNote 
      key={note.id}
      content={note.content}
    />
    )})
  return (
    <div>
      {notesComponents}
    </div>
  )
}

export default NotesContainer
