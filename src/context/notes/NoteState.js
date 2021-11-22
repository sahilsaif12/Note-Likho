import React, { useState } from 'react'
import NoteContext from './noteContext'


export default function NoteState(props) {
  let host="http://localhost:5000/api"
    let initialNotes=[
      {
         _id:  '6184ec75b681cb2299bccc0f'  ,
         user:  '6183ebb269b635f27bb796af'  ,
         title: 'internal exam 2',
         description: 'at 10 am',
         tag: 'exam',
         date: '2021-11-05T08:33:57.442Z',
         __v: 0
       },
       {
         _id:  '619420367abe853460139a04'  ,
         user:  "6183ebb269b635f27bb796af",
         title: 'note 1',
         description: 'at 10 am',
         tag: 'exam',
         date: '2021-11-16T21:18:46.042Z',
         __v: 0
       }
    ]
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

      // let note={
      //   "_id": "6184ec75b681cb2299bccc0f",
      //     "user": "6183ebb269b635f27bb796af",
      //     "title": title,
      //     "description": description,
      //     "tag": tag,
      //     "date": "2021-11-05T08:33:57.442Z",
      //     "__v": 0
      // }
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
    }
    

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
    return (
        <NoteContext.Provider value={{notes,getNotes,addNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
