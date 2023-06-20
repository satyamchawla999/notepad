import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addNote } from '../../Features/Note/noteSlice';
import { Modal, Input } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../../Assets/Styles/editor.css"

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
}

const Editor = () => {

  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (value !== "" && title !== "") {
      const data = {
        title: title,
        value: value,
      }

      dispatch(addNote(data));

      setValue("");
      setTitle("");

      handleOk();
    } else {
      alert("Please Input All Fields");
    }

    setValue("");
    setTitle("");
    return;

  }

  const handleChange = (content) => {
    setValue(content);
  }

  return (
    <div className="editor">
      <h2>Click on <p>&nbsp;+&nbsp;</p> button to Add Note</h2>

      <button onClick={showModal} className="button">+</button>

      <Modal className="modal" onOk={handleSubmit} open={isModalOpen} onCancel={handleCancel} bodyStyle={{ height: 700 }} width={1000}>
        <form >
          <br></br>
          <Input value={title} placeholder="Add Title" onChange={(e) => { setTitle(e.target.value) }} />
          <p></p>
          <ReactQuill className="notePad" modules={modules} value={value} onChange={handleChange} theme="snow" />
        </form>
      </Modal>
    </div>
  );

}

export default Editor;
