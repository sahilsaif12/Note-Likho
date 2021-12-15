import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import '../App.css'
import CreateNoteBox from './CreateNoteBox'
import ExpandedNoteBox from './ExpandedNoteBox'
import Noteitem from './Noteitem'
// import Search from './Search'
// import { MDBInput } from 'mdbreact';

export default function Home(props) {
    let context = useContext(noteContext)
    const { createNote, setcreateNote, notes, setrender,expandNoteBox,setexpandNoteBox } = context
    const { confirmAlert, setconfirmAlert, expand, setexpand } = props

    useEffect(() => {
        // getNotes()
        setrender(1)
        setcreateNote(false)
        // eslint-disable-next-line
    }, [])
    return (
        <div className={`${!expand ? "px-3" : ""}`} >
            {/* <Search /> */}
            <div className="d-flex">
                <div className="createNoteContainer pt-5" style={{ zIndex: "2" }} >
                    <span className=" position-fixed btn-circle btn-lg  rounded animated zoomIn fast  note-create-btn " style={{ cursor: "pointer" }} data-tooltip-text="Create note" data aria-label="note" onClick={() => setcreateNote(true)} ><i className="fas fa-plus" style={{ color: 'white' }}></i></span>
                    {createNote && <CreateNoteBox expand={expand} setexpand={setexpand} newNote={true} />}
                </div>

                {notes.length === 0 &&
                    <div className=" text-center  position-absolute" style={{ width: "95%" }}>
                        <p className="h3 text-muted text-center ">No notes to show</p>
                    </div>
                }
                <div className={`row   justify-content-${window.outerWidth <= 620 ? "center" : "evenly"}   px-2 animated  ${createNote && window.outerWidth <= 620 ? "notes-hide" : "d-flex zoomIn faster notes-visible"} `} style={{ zIndex: "1" }}>
                    {notes.map((element, i) => {
                        return <div className="md-col-3 m-3 " style={{ order: notes.length - i }}>
                            <Noteitem title={element.title} desc={element.description} tag={element.tag} edited={element.edited} date={element.date} stared={element.stared} color={element.color} num={i} key={String(i)} id={element._id} confirmAlert={confirmAlert} setconfirmAlert={setconfirmAlert} />
                        </div>

                    })}
                </div>

            </div>
        </div>

    )
}
