import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../Assets/Styles/header.css"
import NoteItems from "./subComponents/NoteItems";

const Header = () => {

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([])
  const notes = useSelector((state) => state.note.notes);


  useEffect(() => {

    const getUser = () => {
      const data = notes.filter((note) => {
        if (note.data.title.toLowerCase().includes(search)) {
          return note.data.title;
        }
      })
      setUsers(data);
    }

    if (search.length <= 2) {
      setUsers([])
    }

    if (search.length >= 2) {
      getUser();
    }

  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="header">
      <input onChange={handleChange} placeholder="Search Item" />

      <div className="searchUser">
        {users.map((user) => (
          <div className="userItems">
            <NoteItems
              key={user.id}
              note={user}
            />
          </div>

        ))}
      </div>
    </div>
  );
}

export default Header;
