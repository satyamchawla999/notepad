
import { DisplayNotes, Editor } from './subComponents'
import "../Assets/Styles/note.css"
const Note = () => {
  return (
    <div className="note">
      <DisplayNotes />
      <Editor />
    </div>
  );
}

export default Note;
