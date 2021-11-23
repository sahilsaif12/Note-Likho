import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import '../App.css'
import CreateNoteBox from './CreateNoteBox'
import Noteitem from './Noteitem'
import Search from './Search'
// import { MDBInput } from 'mdbreact';

export default function Home() {
    let context = useContext(noteContext)
    const {createNote,setcreateNote,notes,getNotes,setrender}=context
    useEffect(() => {
        getNotes()
        setrender(1)
        // eslint-disable-next-line
    }, [])
    return (
        <div className="px-3" >
            <Search />
            <div className="d-flex">

                <div className="createNoteContainer" style={{ zIndex: "2" }} >
                    <a className=" position-fixed btn-circle btn-lg  rounded animated zoomIn fast  note-create-btn " data-tooltip-text="Create note" data aria-label="note" onClick={() => setcreateNote(true)} href="#!" ><i className="fas fa-plus" style={{ color: 'white' }}></i></a>
                    {createNote && <CreateNoteBox />}
                </div>

                <div className={`row justify-content-${window.outerWidth<=620?"center":"evenly"}   px-2 animated notesDiv ${createNote && window.outerWidth <= 620 ? "notes-hide" : "d-flex zoomIn faster notes-visible"} `} style={{ zIndex: "1" }}>
                    {notes.map((element, i) => {
                        return <div className="md-col-3 m-3 " style={{order:notes.length - i}}>
                            <Noteitem title={element.title} desc={element.description} tag={element.tag} date={element.date} num={i}  key={String(i)} id={element._id} />
                        </div>
                        
                    })}
                </div>

            </div>
        </div>

    )
}
