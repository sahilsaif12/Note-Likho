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
    status: 'created'
  }
  const [update, setupdate] = useState(defaultUpdate)
  let host = "https://note-likho.herokuapp.com/api"
  let initialNotes = []
  const [notes, setnote] = useState(initialNotes)
  const [StarNotes, setStarNotes] = useState([])
  const [expandNoteBox, setexpandNoteBox] = useState({ expand: false })

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

  const addNote = async (title, description, tag, date) => {
    //Api call
    const response = await fetch(`${host}/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      body: JSON.stringify({ title, description, tag, edited: false, date })
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
    response.json()
    let newNotes = notes.filter((note) => note._id !== id)
    let newstarNotes = StarNotes.filter((note) => note._id !== id)
    setnote(newNotes)
    setStarNotes(newstarNotes)

    setrender('')
  }


  //* Update a note
  const updateNote = async (id, title, description, tag, edited, date, stared, color) => {
    //Api call
    if (stared==="" || color==="") {
      for (let index = 0; index < notes.length; index++) {
        const note = notes[index];
        if (note._id === id) {
          stared = stared ==="" ?note.stared: stared
          color = color === "" ?note.color: color 
          break;
        }
      }

    }
    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag, edited, stared, date, color })

    });
    response.json()
    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const note = newNotes[index];
      if (note._id === id) {
        note.title = `${title === "" ? note.title : title}`
        note.description = `${description === "" ? note.description : description}`
        note.tag = `${tag === "" ? note.tag : tag}`
        note.edited = edited
        note.date = date
        note.stared = stared
        note.color = color
        break;
      }
    }
    setnote(newNotes);

    console.log(stared);

    if (stared) {
      let newNotes = JSON.parse(JSON.stringify(StarNotes))
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const note = newNotes[index];
        if (note._id === id) {
          note.title = `${title === "" ? note.title : title}`
          note.description = `${description === "" ? note.description : description}`
          note.tag = `${tag === "" ? note.tag : tag}`
          note.edited = edited
          note.date = date
          note.stared = stared
          note.color = color
          break;
        }
      }
      setStarNotes(newNotes)
      console.log("stared");

    }

    if(!stared) {
      let newNotes = StarNotes.filter((note) => note._id !== id)
      setStarNotes(newNotes)
      console.log("not stared");
    }
  }



  //* Get all star marked notes

  const getStaredNotes = async () => {
    //Api call
    const response = await fetch(`${host}/notes/starNotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    let allNotes = await response.json();
    setStarNotes(allNotes)
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
      localStorage.setItem('token', res.authToken)
      // history.push('/')
    }
    return res

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
      localStorage.setItem('token', res.authToken)
      // history.push('/')
    }
    return res
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
    return res.user.name
  }



  return (
    <NoteContext.Provider value={{ notes, setnote, createNote, setcreateNote, update, setupdate, getNotes, addNote, deleteNote, updateNote, render, setrender, userSignIn, userLogIn, getUserDetails, StarNotes, getStaredNotes, expandNoteBox, setexpandNoteBox }}>
      {props.children}
    </NoteContext.Provider>
  )
}
