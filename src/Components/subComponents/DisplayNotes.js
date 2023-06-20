import { useSelector} from "react-redux";
import NoteItems from "./NoteItems";

import "../../Assets/Styles/displayNotes.css"


const DisplayNotes = ()=>{
  const notes = useSelector((state) => state.note.notes);
  console.log(notes)

    return (
      <div className="displayNotes">
        <div className="displayHeading">
          <h1>Recent Notes</h1>
        </div>

        {
            notes.map((note)=>(
              <NoteItems key={note.id} note={note}/>
            ))
        }
      </div>
    );
  }
  
  export default DisplayNotes;
  