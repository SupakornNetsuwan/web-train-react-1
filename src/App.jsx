import { useState , useEffect} from "react";
import Note from "./components/Note"

function App() {

  const [notes, setNotes] = useState([])
  const [noteInput, setNoteInput] = useState("")

  const createNewNote = () => {
    setNotes([noteInput , ...notes])
    setNoteInput("")
  }

  useEffect(() => {
    console.log("Note updated, this is new")
    console.log(notes)
  }, [notes])

  useEffect(() => {
    console.log("Current input updated :", noteInput)
  }, [noteInput])

  return (
    <div className="m-4">
      <div className="flex justify-center space-x-2">
        <input type="text" value={noteInput} onChange={e => setNoteInput(e.target.value)} className="p-2 border bg-slate-50 outline-none"/>
        <button onClick={createNewNote} className="bg-blue-500 hover:bg-blue-600 shadow px-4 py-2 text-white rounded-md">
          Create a new Note
        </button>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 mt-4">
        {
          notes.map((note, index) => {
            return(
              <Note message={note} index={index} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
