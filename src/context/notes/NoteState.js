import React, { useState } from 'react'
import NoteContext from './noteContext'
// import { useHistory } from "react-router-dom";


export default function NoteState(props) {
  
  // let history=useHistory()
  const [createNote, setcreateNote] = useState(false)
  const [render, setrender] = useState(null)
  let defaultUpdate = {
    update: false,
    noteIndex: 0,
    updateId: '',
    status:'created'
  }
  const [update, setupdate] = useState(defaultUpdate)
  let host = "http://localhost:5000/api"
  let initialNotes = []
  const [notes, setnote] = useState(initialNotes)
  // const [token, settoken] = useState('sdf')

  //* Get all notes
  
  const getNotes = async () => {
    //Api call
    const response = await fetch(`${host}/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    let allNotes = await response.json();
    setnote(allNotes)
  }


  //* Add a note

  const addNote = async (title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      body: JSON.stringify({ title, description, tag,edited:false })
    });

    let note = await response.json();
    setnote(notes.concat(note))
    setrender(note._id)
  }


  //* Delete a note
  const deleteNote = async (id) => {
    //Api call
    const response = await fetch(`${host}/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    let newNotes = notes.filter((note) => note._id !== id)
    setnote(newNotes)
  }


  //* Update a note
  const updateNote = async (id, title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag,edited:true})

    });
    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = `${title === "" ? newNotes[index].title : title}`
        newNotes[index].description = `${description === "" ? newNotes[index].description : description}`
        newNotes[index].tag = `${tag === "" ? newNotes[index].tag : tag}`
        newNotes[index].edited = true
        break;
      }
    }
    setnote(newNotes);
  }


  //* Sign in
  const userSignIn = async (name, email, password) => {
    //Api call
    const response = await fetch(`${host}/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    let res = await response.json();
    if (res.success) {
      localStorage.setItem('token',res.authToken)
      // history.push('/')
    }
    return res.success
  }


  //* Log in
  const userLogIn = async (email, password) => {
    //Api call
    const response = await fetch(`${host}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    let res = await response.json();
    if (res.success) {
      localStorage.setItem('token',res.authToken)
      // history.push('/')
    }
    return res.success
  }

  //* Get user details
  const getUserDetails = async () => {
    //Api call
    const response = await fetch(`${host}/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    
    let res = await response.json();
    console.log(res);
    console.log(res.user.name);
    return res.user.name
  }
  
  return (
    <NoteContext.Provider value={{ notes,setnote, createNote, setcreateNote, update, setupdate, getNotes, addNote, deleteNote, updateNote, render, setrender,userSignIn,userLogIn,getUserDetails }}>
      {props.children}
    </NoteContext.Provider>
  )
}
