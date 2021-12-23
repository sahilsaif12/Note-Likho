import React, { useState, useContext } from 'react'
import '../App.css'
import noteContext from '../context/notes/noteContext'
import { MDBInput } from 'mdbreact';

export default function CreateNoteBox(props) {
    const [animateDown, setanimateDown] = useState(false)
    const [saveBtn, setsaveBtn] = useState('Save')
    const { expand, setexpand,newNote } = props
    const context = useContext(noteContext)
    const { notes, addNote, setcreateNote, update, setupdate, updateNote,StarNotes } = context
    const [note, setnote] = useState({ "title": "", "description": "", "tag": "" })
    let NOTES=newNote?notes:StarNotes
    let handleAnimation = () => {
        setTimeout(() => {
            setanimateDown(true)
        }, 300);
        setTimeout(() => {
            setcreateNote(false)
            setexpand(false)
        }, 1000);
    }
    let noteSavedOrCancel = (msg) => {
        
        let date = Date()
        setsaveBtn(msg)
        handleAnimation()
        if (update.update) {
            setupdate({ update: false })
            updateNote(update.updateId, note.title, note.description, note.tag, true, date,"","")
        }
        else {
            addNote(note.title, note.description, note.tag, date)
        }
    }

    let handleOnChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div style={expand ? { width: "100%", backdropFilter: "blur(20px)", height: "100%", position: "fixed", top: "5%" } : {}}>
            <div className={` p-3 animated ${!animateDown ? ' bounceInUp' : 'bounceOutDown'}   border-2 border-primary shadow-lg rounded blue-grey darken-1 z-depth-5 d-flex flex-column note-container`} style={expand ? { width: "80%", height: "80%", position: "absolute", left: "10%", top: "10%",transition:".3s" } : {transition:".3s"}} >
            
                <span className="position-absolute " style={{ top: "5px", left: "15px",cursor:"pointer" }}     >
                    {expand ?
                        <svg style={{ color: "white" }} onClick={() => setexpand(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fullscreen-exit" viewBox="0 0 16 16">
                            <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z" />
                        </svg>
                        :
                        <svg style={{ color: "white" }} onClick={() => setexpand(true)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z" />
                        </svg>
                    }

                </span>
                
                <span className="position-absolute " style={{ top: "5px", right: "15px",cursor:"pointer" }} onClick={handleAnimation}    ><ion-icon name="close-outline" size="large" ></ion-icon></span>

                <MDBInput className="text-white" label="Note Title" name="title" labelClass="text-white-50 " valueDefault={update.update ?NOTES[update.noteIndex].title : ''} onChange={handleOnChange} />

                <MDBInput className="my-2 text-white note-desc overflow-auto scrollbar scrollbar-primary" valueDefault={update.update ? NOTES[update.noteIndex].description : ''} onChange={handleOnChange} type="textarea" label="Take a note" labelClass=" text-white-50" name="description" rows={expand ? "10" : "5"} />

                <MDBInput className="text-white" label="Tags" icon="tags" labelClass="text-white-50 " name="tag" valueDefault={update.update ? NOTES[update.noteIndex].tag : ''} onChange={handleOnChange} />
                <button disabled={note.title.trim() === "" && note.description.trim() === "" && note.tag.trim() === ""} className={`btn btn-lg  align-middle rounded z-depth-3 align-self-center text-white note-save-btn`} onClick={() => {
                    noteSavedOrCancel("Saved ✔")
                }} style={{cursor:"pointer" }}>{saveBtn}</button>

            </div>
        </div>
    )
}
