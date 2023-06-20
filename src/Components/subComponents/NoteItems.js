import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteNote } from "../../Features/Note/noteSlice";
import { Button, Modal,Input } from 'antd';
import {editNote} from "../../Features/Note/noteSlice"
import "../../Assets/Styles/noteItems.css"
import ReactQuill from 'react-quill';


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

const NoteItems = (props) => {

  const dispatch = useDispatch();

  const item = props.note;

  const [value, setValue] = useState(item.data.value);
  const [title, setTitle] = useState(item.data.title);

  const currentValue = value;
  const currentTitle = title

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (e) => {
    // e.stopPropogation();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {

    console.log("hello")

    e.preventDefault();
    if (value !== "" && title !== "") {
      const data = {
        id:item.id,
        title: title,
        value: value,
      }
  
      dispatch(editNote(data));
      handleOk();
    } else {
      handleOk();
      return;
    }
    
  }

  const handleChange = (content) => {
    setValue(content);
  }

  const handleDelete = () => {
    dispatch(deleteNote(item.id))
  }

  return (
    <>
    
    <div className="noteItems" onClick={showModal} >

      <div className="itemLeft">
        <h2>{currentTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: currentValue }}></p>
      </div>
      <div className="itemRight">
        <button onClick={handleDelete}>
          Delete
        </button>
        <button onClick={showModal}>
          Edit
        </button>
      </div>

      <Modal className="modal" onOk={handleSubmit} open={isModalOpen} onCancel={handleCancel} bodyStyle={{ height: 700 }} width={1000} >
        <form >
          <br></br>
          <Input value={title} placeholder={currentTitle} onChange={(e) => { setTitle(e.target.value) }} />
          <p></p>
          <ReactQuill className="notePad" modules={modules} value={currentValue} onChange={handleChange} theme="snow" />
        </form>
      </Modal>

    </div>

    <Modal className="modal" onOk={handleSubmit} open={isModalOpen} onCancel={handleCancel} bodyStyle={{ height: 700 }} width={1000} >
        <form >
          <br></br>
          <Input value={title} placeholder={currentTitle} onChange={(e) => { setTitle(e.target.value) }} />
          <p></p>
          <ReactQuill className="notePad" modules={modules} value={currentValue} onChange={handleChange} theme="snow" />
        </form>
      </Modal>

    
    </>
  );
}

export default NoteItems;
