import React, { useState, useContext } from 'react'
import '../App.css'
import noteContext from '../context/notes/noteContext'
import { MDBInput } from 'mdbreact';

export default function CreateNoteBox(props) {
    // let animateDown=false
    const [animateDown, setanimateDown] = useState(false)
    const [saveBtn, setsaveBtn] = useState('Save')
    const context = useContext(noteContext)
    const {addNote}=context
    const [note, setnote] = useState({"title":"","description":"","tag":""})
    let noteSavedOrCancel = (msg) => {
        setsaveBtn(msg)
        setTimeout(() => {
            setanimateDown(true)
        }, 500);
        setTimeout(() => {
            props.setcreateNote(false)
        }, 1500);
    }
    let handleOnChange = (e) => {
        setnote({...note,[e.target.name]:e.target.value})
    }
    let addingNewNotes = (e) => {
        // e.preventDefault()
        addNote(note.title,note.description,note.tag)
    }
    return (
        <div className={` p-3 animated ${!animateDown ? ' bounceInUp' : 'bounceOutDown'}   border-2 border-primary shadow-lg rounded blue-grey darken-1 z-depth-5 d-flex flex-column note-container`}>

            <a className="position-absolute " style={{ top: "5px", right: "15px" }} onClick={() => noteSavedOrCancel("save")} href="#!" ><ion-icon name="close-outline" size="large" ></ion-icon></a>

            <MDBInput className="text-white" label="Note Title" name="title" labelClass="text-white-50 " onChange={handleOnChange} />

            <MDBInput className="my-2 text-white note-desc" onChange={handleOnChange} type="textarea" label="Take a note" labelClass=" text-white-50" name="description" rows="5"   />

            <MDBInput className="text-white" label="Tags" icon="tags" labelClass="text-white-50 " name="tag" onChange={handleOnChange} />

            <button className="btn  align-middle rounded z-depth-3 align-self-center text-white note-save-btn" onClick={() => {
                noteSavedOrCancel("Saved ✔")
                addingNewNotes(Event)
            }}>{saveBtn}</button>

        </div>
    )
}
