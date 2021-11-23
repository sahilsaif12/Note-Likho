import React, { useState } from 'react'
import NoteContext from './noteContext'


export default function NoteState(props) {
  const [createNote, setcreateNote] = useState(false)
  const [render, setrender] = useState(null)
  let defaultUpdate={
    update:false,
    noteIndex:0,
    updateId:''
  }
  const [update, setupdate] = useState(defaultUpdate)
  let host="http://localhost:5000/api"
    let initialNotes=[]
    const [notes, setnote] = useState(initialNotes)


    //* Get all notes

const getNotes=async()=>{
      //Api call
      const response = await fetch(`${host}/notes/fetchnotes`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4M2ViYjI2OWI2MzVmMjdiYjc5NmFmIn0sImlhdCI6MTYzNjA2MDc2Mn0.HzPw6odb0Qkibt8eU846KHa_mx-BTnOcRmvA7pOVevE'
        },
      });
      let allNotes=await response.json();
      setnote(allNotes)
    }


    //* Add a note
    
    const addNote=async(title,description,tag)=>{
      //Api call
      const response = await fetch(`${host}/notes/addnote`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
         'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4M2ViYjI2OWI2MzVmMjdiYjc5NmFmIn0sImlhdCI6MTYzNjA2MDc2Mn0.HzPw6odb0Qkibt8eU846KHa_mx-BTnOcRmvA7pOVevE'
        },
        
        body: JSON.stringify({title,description,tag}) 
      });

      let note=await response.json();
      setnote(notes.concat(note))
      setrender(note._id)
    }
    

    //* Delete a note
    const deleteNote=async(id)=>{
      //Api call
      const response = await fetch(`${host}/notes/deletenote/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
         'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4M2ViYjI2OWI2MzVmMjdiYjc5NmFmIn0sImlhdCI6MTYzNjA2MDc2Mn0.HzPw6odb0Qkibt8eU846KHa_mx-BTnOcRmvA7pOVevE'
        }
      });
      let newNotes=notes.filter((note)=>note._id!==id)
      setnote(newNotes)
    }


    //* Update a note
    const updateNote=async(id,title,description,tag)=>{
      //Api call
      const response = await fetch(`${host}/notes/updatenote/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
         'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4M2ViYjI2OWI2MzVmMjdiYjc5NmFmIn0sImlhdCI6MTYzNjA2MDc2Mn0.HzPw6odb0Qkibt8eU846KHa_mx-BTnOcRmvA7pOVevE'
        },
        body: JSON.stringify({title,description,tag}) 
        
      });

      let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = `${title===""?newNotes[index].title:title}`
        newNotes[index].description = `${description===""?newNotes[index].description:description}`
        newNotes[index].tag = `${tag===""?newNotes[index].tag:tag}`
        break; 
      }
    }  
    setnote(newNotes);
    }
    return (
        <NoteContext.Provider value={{notes,createNote,setcreateNote,update,setupdate,getNotes,addNote,deleteNote,updateNote,render,setrender}}>
            {props.children}
        </NoteContext.Provider>
    )
}
