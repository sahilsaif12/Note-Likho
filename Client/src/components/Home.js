import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import '../App.css'
import CreateNoteBox from './CreateNoteBox'
import Noteitem from './Noteitem'

export default function Home(props) {
    let context = useContext(noteContext)
    const { createNote, setcreateNote, notes, setrender} = context
    const { confirmAlert, setconfirmAlert, expand, setexpand,scrollPer } = props

    useEffect(() => {
        setrender(1)
        setcreateNote(false)
        // eslint-disable-next-line
    }, [])
    return (
        <div className={`${!expand ? "px-3" : ""}`} style={{zIndex:"2",minHeight:'90vh'}} >
            {/* <Search /> */}
            <div className="d-flex">
                <div className="createNoteContainer pt-5 position-relative" style={{ zIndex: "2" }} >
                    <span className=" position-fixed btn-circle btn-lg  rounded animated zoomIn fast  note-create-btn " style={window.outerWidth <= 620&& scrollPer>=85 ?{bottom:`${scrollPer-82}%`,transition:".3s"}:{}} data-tooltip-text="Create note" data aria-label="note" onClick={() => setcreateNote(true)} ><i className="fas fa-plus" style={{ color: 'white' }}></i></span>
                    {createNote && <CreateNoteBox expand={expand} setexpand={setexpand} newNote={true} />}
                </div>

                {notes.length === 0 &&
                    <div className=" text-center  position-absolute" style={{ width: "95%" }}>
                        <p className="h3 text-muted text-center pt-3">No note to show</p>
                    </div>
                }
                <div className={`row   justify-content-${window.outerWidth <= 620 ? "center" : "evenly"}   px-2 animated  ${createNote && window.outerWidth <= 620 ? "notes-hide" : "d-flex zoomIn faster notes-visible"} `} style={{ zIndex: "1" }}>
                    {notes.map((element, i) => {
                        return <div className="md-col-3 m-3 " style={{ order: notes.length - i }}>
                            <Noteitem title={element.title} desc={element.description} tag={element.tag} edited={element.edited} date={element.date} stared={element.stared} color={element.color} num={i} key={String(i)} id={element._id} confirmAlert={confirmAlert} setconfirmAlert={setconfirmAlert} newNote={true}/>
                        </div>

                    })}
                </div>

            </div>
        </div>

    )
}
