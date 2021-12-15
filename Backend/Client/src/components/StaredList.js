import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import CreateNoteBox from './CreateNoteBox'
import Noteitem from './Noteitem'

export default function StaredList(props) {
    let context = useContext(noteContext)
    const { StarNotes, getStaredNotes, createNote, setcreateNote } = context
    const { confirmAlert, setconfirmAlert, expand, setexpand } = props
    useEffect(() => {
        getStaredNotes()
          setcreateNote(false)
        // eslint-disable-next-line
    }, [])
    return (
        <div className=" px-3 d-flex">
            <div className="createNoteContainer pt-5" style={{ zIndex: "2" }} >
                {/* <a className=" position-fixed btn-circle btn-lg  rounded animated zoomIn fast  note-create-btn " data-tooltip-text="Create note" data aria-label="note" onClick={() => setcreateNote(true)} href={null} ><i className="fas fa-plus" style={{ color: 'white' }}></i></a> */}
                {createNote && <CreateNoteBox expand={expand} setexpand={setexpand} />}

            </div>
            <div className={`row justify-content-${window.outerWidth <= 620 ? "center" : "evenly"}   px-2 animated notesDiv ${createNote && window.outerWidth <= 620 ? "notes-hide" : "d-flex zoomIn faster notes-visible"} `} style={{ zIndex: "1" }}>
                {StarNotes.map((element, i) => {
                    return <div className="md-col-3 m-3 " style={{ order: StarNotes.length - i }}>
                        <Noteitem title={element.title} desc={element.description} tag={element.tag} edited={element.edited} date={element.date} stared={element.stared} color={element.color} num={i} key={String(i)} id={element._id} confirmAlert={confirmAlert} setconfirmAlert={setconfirmAlert} />
                    </div>

                })}
            </div>
        </div>
    )
}
