import React, { useState } from "react";
import "../../styles/NotePadCard.css";

const baseUrl = "https://reqres.in";

const NotePadCard = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [newNote, setnewNote] = useState("");

  const NotePadCardStyle = {
    borderRadius: "19px",
    background: "#F1C75B",
    alignItems: "start",
    justifyContent: "start",
    width: "470px",
    height: "535px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    margin: "1em auto auto",
    overflow: "auto",
  };

  const defaultFormFields = {
    title: "",
    note: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  var contentEditableElement = document.querySelector(".noteTitle");
  var contentEditableElementNote = document.querySelector(".noteDescription");

  var localStorageKey = "contentEditable";

  function saveTitle() {
    var html = contentEditableElement.innerHTML ?? "null";
    setTitle(html);

    localStorage.setItem(localStorageKey, html);
    console.log(title);
  }

  function saveNote() {
    var html = contentEditableElementNote.innerHTML ?? "null";
    setNote(html);

    localStorage.setItem(localStorageKey, html);
    console.log(note);
  }

  return (
    <>
      <div style={NotePadCardStyle} className="notepadcontainer">
        {/* <input type="text" id="note" name="fname" placeholder="note" onChange={saveNote}/>
        <br></br> */}

        <div
          contentEditable="true"
          className="noteTitle"
          onChange={saveTitle}
          placeholder={title}
        >
          Title
        </div>
        <div
          className="noteDescription"
          contentEditable="true"
          onChange={saveNote}
          placeholder="Note"
        >
          Note
        </div>
        {/* <btn className="noteDescription" onClick={save}>save</btn> */}
      </div>
    </>
  );
};

export default NotePadCard;
