import React, { useState } from 'react'
import '../App.css'
import { MDBInput } from 'mdbreact';

export default function CreateNoteBox(props) {
    // let animateDown=false
    const [animateDown, setanimateDown] = useState(false)
    const [saveBtn, setsaveBtn] = useState('Save')
    let noteSavedOrCancel = (msg) => {
        setsaveBtn(msg)
        setTimeout(() => {
            setanimateDown(true)
        }, 500);
        setTimeout(() => {
            props.setcreateNote(false)
        }, 1500);
    }
    return (
        <div className={`position-fixed p-3 animated ${!animateDown ? ' bounceInUp' : 'bounceOutDown'}   border-2 border-primary shadow-lg rounded blue-grey darken-1 z-depth-5 d-flex flex-column note-container`}>

            <a className="position-absolute " style={{ top: "5px", right: "15px" }} onClick={() => noteSavedOrCancel("save")}  ><ion-icon name="close-outline" size="large" ></ion-icon></a>

            <MDBInput className="text-white" label="Note Title" labelClass="text-white-50 " />

            <MDBInput className="my-2 text-white note-desc" type="textarea" label="Take a note" labelClass=" text-white-50" rows="5" />

            <MDBInput className="text-white" label="Tags" icon="tags" labelClass="text-white-50 " />
            
            <button class="btn  align-middle rounded z-depth-3 align-self-center text-white note-save-btn" onClick={() => noteSavedOrCancel("Saved ✔")}>{saveBtn}</button>

        </div>
    )
}
