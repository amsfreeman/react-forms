import {useState} from 'react'

function NewNoteForm({createNewNote}) {
  const [content, setContent] = useState("")

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:4000/notes", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content
      })
    })
    .then(r => r.json())
    .then(newNote => createNewNote(newNote))
  }

  return (
    <div className="form-container">
      <form className="the-form" onSubmit={handleSubmit}>
        <label id="content-input">
          content: <input type="text" name="content" onChange={handleChange}/>
        </label>
        <input type="submit" value="add new note"/>
      </form>
    </div>
  )
}

export default NewNoteForm
