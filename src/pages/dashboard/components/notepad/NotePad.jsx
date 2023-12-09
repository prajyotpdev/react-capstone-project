import React, { useState } from 'react'
import '../../styles/NotePadCard.css';


const baseUrl = 'https://reqres.in';


const NotePadCard = () => {
     
const [ title, setTitle ] = useState("Your Title Goes Here");
const [ note, setNote ] = useState("Your Note Goes Here");

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
  margin: "1em auto auto", overflow: 'hidden' 
};

function newnameset (){
  setNote("new note") ;
   console.log(note);
}

var contentEditableElement = document.querySelector('.noteTitle');
var contentEditableElementNote = document.querySelector('.noteDescription');
  
var localStorageKey = 'contenteditable';


function saveTitle() {
  var html = contentEditableElement.innerHTML??"null";
setTitle(html);

  localStorage.setItem(localStorageKey, html);
  console.log(title);
}

function saveNote() {
  var html = contentEditableElementNote.innerHTML??"null";
setNote(html);

  localStorage.setItem(localStorageKey, html);
  console.log(note);
}


  return (
  <>   
    <div style={NotePadCardStyle} className='notepadcontainer'>
      <div contenteditable='true' className='noteTitle' onMouseLeave={saveTitle} placeholder="Title" ></div>
      <div className="noteDescription" contenteditable="true" onMouseLeave={saveNote} placeholder="Note"></div>
      {/* <btn className="noteDescription" onClick={save}>save</btn> */}
    </div>
  </>
  )
}

export default NotePadCard