import React, { useState, useContext,useRef } from 'react'
import '../App.css'
import noteContext from '../context/notes/noteContext'
import { MDBInput } from 'mdbreact';

export default function CreateNoteBox(props) {
    const [animateDown, setanimateDown] = useState(false)
    const [saveBtn, setsaveBtn] = useState('Save')
    const context = useContext(noteContext)
    const { notes, addNote, setcreateNote, update,setupdate,updateNote} = context
    // const titleref = useRef()
    const [note, setnote] = useState({ "title": "", "description": "", "tag": "" })
    let handleAnimation=()=>{
        setTimeout(() => {
            setanimateDown(true)
        }, 300);
        setTimeout(() => {
            setcreateNote(false)
        }, 1000);
    }
    let noteSavedOrCancel = (msg) => {
        setsaveBtn(msg)
        handleAnimation()
        if (update.update) {
            setupdate({update:false})
            updateNote(update.updateId,note.title, note.description, note.tag)
        }
        else{
            addNote(note.title,note.description,note.tag)
        }
    }
    
    let handleOnChange = (e) => {
        
        console.log( e.target.value)
        setnote({ ...note, [e.target.name]: e.target.value })

    }
    
    return (
        <div className={` p-3 animated ${!animateDown ? ' bounceInUp' : 'bounceOutDown'}   border-2 border-primary shadow-lg rounded blue-grey darken-1 z-depth-5 d-flex flex-column note-container`}>

            <a className="position-absolute " style={{ top: "5px", right: "15px" }} onClick={handleAnimation} href="#!" ><ion-icon name="close-outline" size="large" ></ion-icon></a>

            <MDBInput  className="text-white" label="Note Title" name="title" labelClass="text-white-50 " valueDefault={update.update ? notes[update.noteIndex].title : ''} onChange={handleOnChange} />

            <MDBInput className="my-2 text-white note-desc"  valueDefault={update.update ? notes[update.noteIndex].description : ''} onChange={handleOnChange} type="textarea" label="Take a note" labelClass=" text-white-50" name="description" rows="5" />
 
            <MDBInput className="text-white" label="Tags" icon="tags" labelClass="text-white-50 " name="tag" valueDefault={update.update ? notes[update.noteIndex].tag : ''} onChange={handleOnChange} />

            <button disabled={note.title==="" && note.description==="" && note.tag===""} className="btn  align-middle rounded z-depth-3 align-self-center text-white note-save-btn" onClick={() => {
                noteSavedOrCancel("Saved ✔")
            }}>{saveBtn}</button>

        </div>
    )
}
