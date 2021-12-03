import React, { useContext, useState } from 'react'
import Description from './Description'
import noteContext from '../context/notes/noteContext'
import ConfirmBoxAlert from './ConfirmBoxAlert'
import '../App.css'

export default function Noteitem(props) {
    const context = useContext(noteContext)
    const { updateNote, setcreateNote, update, setupdate, render } = context
    const { title, desc, tag, edited, date,stared, id, num, confirmAlert, setconfirmAlert } = props
    let d = new Date(date)
    let updatingNote = () => {
        setcreateNote(true)
        setupdate({
            update: true,
            noteIndex: num,
            updateId: id,
        })

    }
    const [star, setstar] = useState(stared)
    let markedStar = async () => {
        let s =await star ? false : true
        setstar(s)
        updateNote(id, title, desc, tag, edited, date, s)
    }
    return (

        <div className={`card card-cascade wider rounded animated ${render === id ? "slideInLeft" : ""} faster`} style={{ width: '250px', maxHeight: "400px" }}>
            <div className="view view-cascade gradient-card-header  rounded p-2 text-white" style={{ backgroundColor: "#345B63" }}>
                <h3 className="card-header-title mb-3">{title}</h3>
                <a className="position-absolute" style={{ top: "5px", right: "10px" }} onClick={markedStar} ><i className={`lni ${stared ? 'lni-star-filled' : 'lni-star'} `} style={{ color: "white" }}></i></a>
                <p className="mb-0"><ion-icon name="pricetags-outline" ></ion-icon> {tag}</p>
            </div>

            <div className="card-body pb-1  ">
                <p className="card-text description">
                    {desc.split("\n").map(function (item, id) {
                        return <Description content={item} key={id} />
                    })}
                </p>
                <a href={null} className="card-text text-left d-flex">
                    <p><i className="fas fa-calendar mr-2"></i>{`${edited ? "Last edited" : "created"} on ${d.toLocaleDateString(undefined, { "month": "short", "day": "numeric", "year": "numeric" })}`}</p>
                </a>
                <li className="list-inline-item d-flex justify-content-center">
                    <a className=" btn-floating btn-fb ml-1" onClick={() => document.querySelector(`#colorPalate_${num}`).click()} href={null}>
                        <ion-icon name="color-palette-outline" style={{ color: "black" }}></ion-icon>
                        <input type="color" style={{ width: "0", height: "0", visibility: "hidden" }} name="" id={`colorPalate_${num}`} />
                    </a>
                    <a className=" btn-floating btn-fb mx-2" href={null} onClick={updatingNote}  ><i className="lni lni-pencil" style={{ color: "black", fontSize: "20px" }}></i></a>
                    <a className=" btn-floating btn-fb " href={null} onClick={() => setconfirmAlert({ alert: true, id: id })} ><ion-icon name="trash-outline" style={{ color: "black" }}></ion-icon></a>

                </li>
            </div>
            {/* {confirmAlert && <ConfirmBoxAlert noteId={id}/>} */}
        </div>

    )
}
