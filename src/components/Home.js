import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import '../App.css'
import CreateNoteBox from './CreateNoteBox'
import Noteitem from './Noteitem'
import Search from './Search'
// import { MDBInput } from 'mdbreact';
let timeout = (e) => {
    setTimeout(() => {
        return "d-none"
    }, 500);
}
export default function Home() {
    let noteList = useContext(noteContext)
    const [createNote, setcreateNote] = useState(false)
    function timeout() {
        setTimeout(() => {
            document.querySelector('.notesDiv').classList.add('d-none')
        }, 500);
    }
    return (
        <div className="px-3" style={{ backgroundColor: "#ECFFFB", height: 'auto' }}>
            <Search />
            <div className="d-flex">

                <div className="createNoteContainer" style={{ zIndex: "2" }} >
                    <a class=" position-fixed btn-circle btn-lg  rounded animated zoomIn fast  note-create-btn " data-tooltip-text="Create note" data aria-label="note" onClick={() => setcreateNote(true)} ><i class="fas fa-plus" style={{ color: 'white' }}></i></a>
                    {createNote && <CreateNoteBox createNote={createNote} setcreateNote={setcreateNote} />}
                </div>

                <div className={`row justify-content-${window.outerWidth<=620?"center":"between"}   px-2 animated notesDiv ${createNote && window.outerWidth <= 620 ? "notes-hide" : "d-flex zoomIn faster notes-visible"} `} style={{ zIndex: "1" }}>
                    {noteList.notes.map((element, i) => {
                        return <div className="md-col-3 m-3">
                            <Noteitem title={element.title} desc={element.description} tag={element.tag} date={element.date} num={i + 1} />
                        </div>
                    })}
                </div>

            </div>
        </div>

    )
}
